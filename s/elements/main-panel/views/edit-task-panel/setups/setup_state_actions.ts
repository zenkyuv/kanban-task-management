
import {NewTask} from "../../../types.js"

export function setup_state_actions() {
	return {
		get_new_task_data: (e: SubmitEvent): NewTask => {
			e.preventDefault()
			const formData = new FormData(e.target as HTMLFormElement)
			const title = formData.get("title") as string
			const description = formData.get("description") as string
			const status = formData.get("status") as string
			const subtasks = formData.getAll("subtask") as string[]
			return {
				title,
				description,
				status,
				subtasks
			}
		}
	}
}
