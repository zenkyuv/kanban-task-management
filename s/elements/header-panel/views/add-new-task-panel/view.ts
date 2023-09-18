import {html} from "lit"
import {StateSetter, view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {TaskData} from "../../types.js"
import {context} from "../../../../main.js"
import {main_styles} from "../../main-style.css.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"
import {EditableInputs} from "../../../shared-views/editable-inputs/view.js"

export const AddNewTaskPanel = view({styles: [styles, main_styles], shadow: true}, use => (
	setPanelOpen: StateSetter<boolean>,
	{actions: {add_task}}: context
) => {

	const [taskData, setTaskData] = use.state<TaskData>(
		{
			title: {
				placeholder: "e.g. Make coffee", isValid: true, value: ""
			},
			description: { placeholder: "e.g. Make coffee", isValid: true, value: "" },
			subtasks: [{ placeholder: "e.g. Make coffee", isValid: true, value: "" },
			{ placeholder: "e.g. Drink coffee & smile", isValid: true, value: "" }],
			
		}
	)

	const actions = setup_state_actions(
		taskData, setTaskData, setPanelOpen
	)

	return html`
		<div @pointerdown=${actions.hide_panel} class="panel-background">
			<form @submit=${(e: SubmitEvent) => {
				const formData = actions.get_task_data(e)
				if(formData) {
					add_task(formData)
					actions.force_hide_panel()
				}
			}}
				class="add-new-task-panel">
				<h2>Add New Task</h2>
				<label for="title">Title</label>
					<input required placeholder="e.g. Take coffee break" name="title" />
				<label for="description">Description
				</label>
				<textarea
					placeholder="e.g. It’s always good to take a break. This 15 minute break will
					recharge the batteries a little." name="description" ></textarea>
				<label for="subtask">Subtasks</label>
				${EditableInputs(actions.get_subtasks().map(s => s.placeholder), "subtask", "+ Add New Subtask")}
				<label for="status">Status</label>
				<select name="status">
					<option>Todo</option>
					<option>Doing</option>
					<option>Done</option>
				</select>
				<button type="submit" class="create-task-btn">Create Task</button>
			</form>
		</div>
	`
})
