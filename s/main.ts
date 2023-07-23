import {pub, debounce} from "@benev/frog"
import {obtool} from "@chasemoskal/magical"

import data from "./data.js"
import {Task} from "./types.js"
import {prepare_components} from "./utils/prepare_components.js"

// trackChangesAndSaveToLocalStorage(state.track)
const publish = debounce(0, () => context.on_state_change.publish())
function prepare_actions<A extends {}>(actions: A) {
	return obtool(actions).map(action => (...args: any[]) => {
		const value = action(...args)
		if (value) return value
			else publish()
	}) as A
}

const context = {
	state: {
		data,
		activeBoardName: "Platform Launch",
		themeMode: "light"
	},
	on_state_change: pub<void>(),
	actions: prepare_actions({
		add_todo_item(item: any) {
			context.state.data.boards
		},
		change_item_title(item: any, title: string) {
			item.title = title
		},
		get_column_names() {
			return context.actions.get_active_board()?.columns
			? context.actions.get_active_board()?.columns.map(column => column.name)
			: []
		},
		get_boards() {
			return context.state.data.boards
		},
		set_active_board(name: string) {
			context.state.activeBoardName = name
		},
		get_active_board() {
			return context.actions.get_boards()
			.find(board => board.name === context.state.activeBoardName)
		},
		add_task(task: Task, status?: string) {
			const columnToAddTo = (status: string) => context.actions
				.get_active_board()?.columns?.find(column => column.name === status)
			if (status) {
				columnToAddTo(status)?.tasks.push(task)
				task.status = status
			}
			else columnToAddTo(task.status)?.tasks.push(task)
		},
		remove_task(task: Task) {
			const column_to_remove_from = context.actions.get_active_board()!
				.columns.find(c => c.name === task.status)!
			const filtered = column_to_remove_from.tasks.filter(t => t !== task)
			column_to_remove_from.tasks = filtered
		},
		delete_board() {
			context.state.data.boards = context.state.data.boards
				.filter(board => board !== context.actions.get_active_board())
			context.state.activeBoardName = context.state.data.boards[0].name
		},
		set_theme() {
			if (context.state.themeMode === "light") {
			context.state.themeMode = "dark"
			} else context.state.themeMode = "light"
		},
		add_new_board(e: SubmitEvent) {
			e.preventDefault()
			const formData = new FormData(e.target as HTMLFormElement)
			const boardName = formData.get("board-name") as string
			const boardColumnNames = formData.getAll("board-column-name") as string[]
			if (boardName && boardColumnNames) {
				context.actions.get_boards().push({
					name: boardName, columns: [...boardColumnNames.map(columnName => {
						return {
							name: columnName, tasks: []
						}
					})]
				})
			}
		},
		edit_board(e: SubmitEvent) {
			e.preventDefault()
			const formData = new FormData(e.target as HTMLFormElement)
			const boardName = formData.get("board name") as string
			const boardColumnNames = formData.getAll("board column name") as string[]

			if (boardName && boardColumnNames) {
				context.actions.get_active_board()!.name = boardName
				context.state.activeBoardName = boardName

				if (context.actions.get_active_board()!.columns!.length < boardColumnNames.length) {
					context.actions.get_active_board()?.columns?.push({name: "", tasks: []})
				}

				context.actions.get_active_board()?.columns?.map((column, i) => column.name = boardColumnNames[i])
			}
		}
	})
}

export type context = typeof context

prepare_components(context)