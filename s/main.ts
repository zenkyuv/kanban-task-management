import {pub, debounce} from "@benev/frog"
import {obtool} from "@chasemoskal/magical"

import data from "./data.js"
import {NewTask} from "./elements/main-panel/types.js"
import {Board, BoardData, Boards, Subtask, Task} from "./types.js"
import {prepare_components} from "./utils/prepare_components.js"

const publish = debounce(0, () => context.on_state_change.publish())
function prepare_actions<A extends {}>(actions: A) {
	return obtool(actions).map((action: any) => (...args: any[]) => {
		const value = action(...args)
		if (value) return value
			else publish()
	}) as A
}

const context = {
	state: {
		data,
		active_board: data.boards[0] as undefined | Board,
		theme_mode: "light",
		sidebarOpen: true
	},
	on_state_change: pub<void>(),
	actions: prepare_actions({
		get_column_names() {
			return context.state.active_board?.columns
			? context.state.active_board?.columns.map(column => column.name)
			: []
		},
		get_boards() {
			return context.state.data.boards
		},
		toggle_sidebar() {
			context.state.sidebarOpen = !context.state.sidebarOpen
		},
		set_active_board(board: Board) {
			context.state.active_board = board
		},
		add_task(task: Task, new_status?: string) {
			const columnToAddTo = (status: string) => context.state
				.active_board?.columns?.find(column => column.name === status)
			if (new_status) {
				columnToAddTo(new_status)?.tasks.push(task)
				task.status = new_status
			}
			else columnToAddTo(task.status)?.tasks.push(task)
		},
		remove_task(task: Task) {
			const column_to_remove_from = context.state.active_board!
				.columns.find(c => c.name === task.status)!
			const filtered = column_to_remove_from.tasks.filter(t => t !== task)
			column_to_remove_from.tasks = filtered
		},
		delete_board() {
			context.state.data.boards = context.state.data.boards
				.filter(board => board !== context.state.active_board)
			context.state.active_board = context.state.data.boards[0]
		},
		set_theme() {
			if (context.state.theme_mode === "light") {
			context.state.theme_mode = "dark"
			} else context.state.theme_mode = "light"
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
		set_board(data: Boards) {
			context.state.data = data
		},
		toggle_subtask_completion(subtask: Subtask) {
			subtask.isCompleted = !subtask.isCompleted
		},
		edit_task(task: Task, task_new: NewTask) {
			if (task.title !== task_new.title) 
				task.title = task_new.title
			if (task.description !== task_new.description)
				task.description = task_new.description
			if (task.status !== task_new.status) 
				task.status = task_new.status

			const difference = task.subtasks.length - task_new.subtasks.length

			if(difference > 0) context.actions
				.remove_subtasks(task, task_new.subtasks)
			else if (difference < 0) context.actions
				.add_subtasks(task, task_new.subtasks)
			
		},
		edit_board({boardColumnsNames, boardName}: BoardData) {
			const difference = boardColumnsNames.length - context.state.active_board?.columns.length!

			if (difference > 0) context.actions
				.add_board_columns(difference)
			else if (difference < 0) context.actions
				.remove_board_columns(boardColumnsNames)

			if (context.state.active_board?.columns.some((c, i) => c.name !== boardColumnsNames[i]))
				context.actions.rename_columns(boardColumnsNames)
			
			if (context.state.active_board?.name !== boardName)
				context.actions.rename_board(boardName)
		},
		
		rename_board(boardName: string) {
			context.state.active_board!.name = boardName
		},
		rename_columns(boardColumnsNames: string[]) {
			context.state.active_board?.columns?.map((column, i) => column.name = boardColumnsNames[i])
		},
		set_board_name(boardName: string) {
			context.state.active_board!.name = boardName
		},
		add_board_columns(difference: number) {
			context.state.active_board?.columns?.push(...Array(difference).fill({name: "", tasks: []}))
		},
		remove_board_columns(boardColumnsNames: string[]) {
			const filtered = context.state.active_board?.columns.filter((c, i) => boardColumnsNames.includes(c.name))
			context.state.active_board!.columns = filtered!
		},
		add_subtasks(task: Task, subtasks_titles: string[]) {
			subtasks_titles.forEach((title, i) => title !== task.subtasks?.[i]?.title 
				? task.subtasks.push({title, isCompleted: false})
				: null)
		},
		remove_subtasks(task: Task, subtasks_titles: string[]) {
			const filtered = task.subtasks.filter(s => subtasks_titles.includes((s.title))) 
			task.subtasks = filtered
		}
	})
}

export type context = typeof context

prepare_components(context)
