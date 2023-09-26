export interface Task {
	title: string
	description: string
	status: string
	subtasks: Subtask[]
}

export interface Subtask {
	title: string
	isCompleted: boolean
}

export interface Boards {
	boards: Board[]
}

export interface Board {
	name: string
	columns: Column[]
}
// export type Track = typeof state.track

export type Column = {
	name: string
	tasks: Task[]
}

export interface CreateBoardState {
	remove_input: (i: number) => void
	set_input_value: (i: number, e: InputEvent) => void
	hide_create_board_panel: (e: PointerEvent) => void
	add_input: () => void
	get_inputs: () => string[]
	get_board_data: (e: SubmitEvent) => {
		boardName: string
		boardColumnsNames: string[]
	}
}

export type ActivePanel = "edit_board_panel" | "delete_board_panel" | ""

export interface BoardData {
	boardName: string
	boardColumnsNames: string[]
}
