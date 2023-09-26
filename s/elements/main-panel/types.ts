import {Task} from "../../types.js"

export interface ColumnsState {
	hide_task_panel: (e: PointerEvent | Event) => void
	task_data: Task
}

export interface TaskPanelState {
	change_task_column: (e: Event, task_data: Task) => void
}

export interface TaskPanelMenuState {
	hide_menu_panel: ({ target }: PointerEvent) => void
}

export interface NewTask {
	title: string
	description: string
	status: string
	subtasks: string[]
}

export type ActivePanel = "edit_task" | "delete_task" | ""
