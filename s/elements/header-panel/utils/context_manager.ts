import {TaskFormData} from "../types"
import {Columns, ContextState} from "../../../types"

export class ContextManager {
	#data: ContextState
	#publish: () => void

	constructor(data: ContextState, publish: () => void) {
		this.#data = data
		this.#publish = publish
	}
	
	get active_board() {
		return this.#data.boardsData.boards
			.find(board => board.name === this.#data.activeBoardName)
	}

	set active_board_name(name: string) {
		this.#data.boardsData.boards
			.find(board => board.name === this.#data.activeBoardName)!.name = name
	}

	get get_column_names() {
		return this.active_board?.columns
		? this.active_board.columns.map(column => column.name)
		: []
	}

	get #boards() {
		return this.#data.boardsData.boards
	}
	
	set #boards(boards: {name: string, columns: Columns}[]) {
		this.#data.boardsData.boards = boards
	}

	delete_board = () => {
		this.#boards = this.#data.boardsData.boards.filter(board => board !== this.active_board)
		this.#data.activeBoardName = this.#boards[0].name
		this.#publish()
	}

	edit_board_save_changes = (e: SubmitEvent) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const boardName = formData.get("board name") as string
		const boardColumnNames = formData.getAll("board column name") as string[]

		if (boardName && boardColumnNames) {
			this.active_board_name = boardName
			this.#data.activeBoardName = boardName

			if (this.active_board!.columns!.length < boardColumnNames.length) {
				this.active_board?.columns?.push({name: "", tasks: []})
			}

			this.active_board?.columns?.map((column, i) => column.name = boardColumnNames[i])
			this.#publish()
		}
	}

	create_task = (data: TaskFormData) => {
			const columnToAddTo = this.active_board?.columns?.find(column => column.name === data.status)
			columnToAddTo?.tasks?.push({
				title: data.title, description: data.description, status: data.status, subtasks: data.subtasks
					.map(subtask => ({ title: subtask, isCompleted: false }))
			})
			this.#publish()
	}
}