export interface HeaderMenuState {
	hide_panel: (e: PointerEvent, panelName: string) => void
}

export interface AddNewTaskState {
	set_value: (i: number, e: InputEvent) => void
	add_subtask: (e: PointerEvent) => void
	get_subtasks: () => {
		placeholder: string
		isValid: boolean
		value: string
}[]
	check_form_validity: (e: SubmitEvent) => {
		return_data: () => TaskFormData | undefined
	}
	is_input_valid: (type: keyof TaskData, i?: number | undefined) => boolean
	remove_column_name_input: (i: number) => void
}

export interface TaskFormData {
	subtasks: Subtask[]
	description: string
	title: string
	status: string
}

export interface FormValidity {
	title: false,
	description: false
	subtasks: boolean[]
}

export interface TaskData {
	title: {
			placeholder: string
			isValid: boolean
			value: string
	}
	description: {
			placeholder: string
			isValid: boolean
			value: string
	}
	subtasks: {
			placeholder: string
			isValid: boolean
			value: string
	}[]
}

export interface Subtask {
	title: string
	isCompleted: boolean
}