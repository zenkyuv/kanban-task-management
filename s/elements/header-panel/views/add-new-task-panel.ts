import {html} from "lit"
import {StateSetter, view} from "@chasemoskal/magical"

import {TaskData} from "../types.js";
import {ContextManager} from "../utils/context_manager.js"
import {renderSubtasksInputs } from "../renderers/render-subtasks-inputs.js"
import {setup_add_new_task_panel_actions} from "../action-setups/setup_add_new_task_panel_actions.js"


export const AddNewTaskPanel = view({}, use => (
	setPanelOpen: StateSetter<boolean>,
	cm: ContextManager
) => {

	const [taskData, setTaskData, getTaskData] = use.state<TaskData>(
		{
			title: {
				placeholder: "e.g. Make coffee", isValid: true, value: ""
			},
			description: { placeholder: "e.g. Make coffee", isValid: true, value: "" },
			subtasks: [{ placeholder: "e.g. Make coffee", isValid: true, value: "" },
			{ placeholder: "e.g. Drink coffee & smile", isValid: true, value: "" }],
			
		}
	)

	const actions = setup_add_new_task_panel_actions(
		taskData, setTaskData, getTaskData, setPanelOpen
	)

	return html`
		<div @pointerdown=${actions.hide_panel} class="panel-background">
			<form @submit=${(e: SubmitEvent) => {
				const isValid = actions.check_form_validity(e).return_data()
				if(isValid) {
					cm.create_task(isValid)
					actions.force_hide_panel()
				}
			}}
				class="add-new-task-panel">
				<h2>Add New Task</h2>
				<label for="title">Title</label>
				<div class="err-box">
					<input ?data-invalid=${!actions.is_input_valid("title")} placeholder="e.g. Take coffee break" name="title" />
					${!actions.is_input_valid("title")
					? html`<span class=err-msg>Can't be empty</span>` 
					: null}
				</div>
				<label for="description">Description
				</label>
				<textarea ?data-invalid=${!actions.is_input_valid("description")}
					placeholder="e.g. It’s always good to take a break. This 15 minute break will
					recharge the batteries a little." name="description" ></textarea>
				<label for="subtask">Subtasks</label>
				${renderSubtasksInputs(actions)}
				<button type="button" @pointerdown=${actions.add_subtask} class="add-subtask-btn">
					+ Add New Subtask
				</button>
				<label for="status">Status</label>
				<select name="status">
					<option>Todo</option>
					<option>Doing</option>
					<option>Done</option>
				</select>
				<button class="create-task-btn">Create Task</button>
			</form>
		</div>
	`
})