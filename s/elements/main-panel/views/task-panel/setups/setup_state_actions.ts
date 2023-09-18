import {Task} from "../../../../../types.js"
import {context} from "../../../../../main.js"

export function setup_state_actions({actions}: context) {
	return {
		change_task_column: (e: Event, task_data: Task) => {
			const new_status = (e.target as HTMLSelectElement).value
			actions.remove_task(task_data)
			actions.add_task(task_data, new_status)
		}
	}
}
