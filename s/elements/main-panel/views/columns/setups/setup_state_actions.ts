import {StateSetter} from "@chasemoskal/magical"

import {Task} from "../../../../../types.js"

export function setup_state_actions(
	taskViewData: Task | null,
	setTaskViewData: StateSetter<Task | null>
) {
	return {
		hide_task_panel: ({target}: PointerEvent | Event) => {
			if ((target as HTMLElement).className === "panel-background"
				|| (target as HTMLElement).className === "btn-cancel"
				|| (target as HTMLElement).className === "btn-delete")
				setTaskViewData(null)
		},
		task_data: taskViewData!
	}
}
