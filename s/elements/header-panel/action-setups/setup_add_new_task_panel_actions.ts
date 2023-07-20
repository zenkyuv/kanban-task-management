import { StateGetter, StateSetter } from "@chasemoskal/magical"
import { TaskData } from "../types.js"

export function setup_add_new_task_panel_actions(
		taskData: TaskData,
		setTaskData: StateSetter<TaskData>,
		getTaskData: StateGetter<TaskData>,
		setPanelOpen: StateSetter<boolean>) {
		return {
			check_form_validity: (e: SubmitEvent) => {
				e.preventDefault()
				const formData = new FormData(e.target as HTMLFormElement)
				const title = formData.get("title") as string
				const description = formData.get("description") as string
				const status = formData.get("status") as string
				const subtasks = formData.getAll("subtask") as string[]
				setTaskData({
					...taskData,
					title: {
						...taskData.title,
						isValid: title !== "" ? true : false
					},
					subtasks: [
						...taskData.subtasks.map((subtask, i) => {
							return {
								...subtask,
								isValid: subtasks[i] === "" ? false : true
							}
						})
					]
				})
				return {
					return_data: () => {
						const taskData= getTaskData()
						const invalidSubtask = taskData.subtasks.some(subtask => !subtask.isValid)
						if (
								taskData.title.isValid
								&& taskData.description.isValid
								&& !invalidSubtask
						)
							return {subtasks, description, title, status}
						else undefined
					}
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
			is_input_valid: (type: keyof TaskData, i?: number) => {
				if (type === "subtasks") {
					return taskData[type][i!].isValid
				} else return taskData[type].isValid
			},
			set_value: (i: number, e: InputEvent) => {
					const copy = [...taskData.subtasks]
					copy[i].value = (e.target as HTMLInputElement).value
				setTaskData({
					...taskData,
					subtasks: copy
				})
			
			},
			hide_panel: (e: PointerEvent | SubmitEvent) => {
				console.log((e.target as HTMLElement).className)
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