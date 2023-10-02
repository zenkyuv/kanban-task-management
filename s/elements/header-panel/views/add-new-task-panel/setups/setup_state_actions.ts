
import {StateSetter} from "@chasemoskal/magical"

import {TaskData} from "../../../types.js"

export function setup_state_actions(
		taskData: TaskData,
		setTaskData: StateSetter<TaskData>,
		setPanelOpen: StateSetter<boolean>) {
		return {
			get_task_data: (e: SubmitEvent) => {
				e.preventDefault()
				const formData = new FormData(e.target as HTMLFormElement)
				const title = formData.get("title") as string
				const description = formData.get("description") as string
				const status = formData.get("status") as string
				const subtasks = formData.getAll("subtask") as string[]
				return {
					subtasks: subtasks.map(s => {
						return {
							title: s,
							isCompleted: false
							}
					}),
					description, title, status
				}
			},
			add_subtask: (e: PointerEvent) => {
				e.preventDefault()
				setTaskData({
					...taskData,
					subtasks: [...taskData.subtasks, {placeholder: "", isValid: true, value: ""}]
				})
			},
			get_subtasks: () => taskData.subtasks,
			hide_panel: (e: PointerEvent | SubmitEvent) => {
				if ((e.target as HTMLElement).className === "panel-background")
					setPanelOpen(false)
			},
			force_hide_panel: () => {
				setPanelOpen(false)
			},
			remove_column_name_input: (i: number) => {
				setTaskData((inputs) => {
					return {
						...taskData,
						subtasks: inputs.subtasks.slice(0, i).concat(inputs.subtasks.slice(i + 1))
					}
				})
			}
		}
	}
