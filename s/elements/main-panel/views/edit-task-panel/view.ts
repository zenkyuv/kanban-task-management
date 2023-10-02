import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {Task} from "../../../../types.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"
import {ColumnsState, TaskPanelState} from "../../types.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"
import {EditableInputs} from "../../../views/editable-inputs/view.js"

export const EditTaskPanel = view({styles: [styles, mainStyles], shadow: true}, use => (
	{actions: {edit_task}, state: {active_board}}: context,
	{hide_task_panel, task_data}: ColumnsState,
	{change_task_column}: TaskPanelState
) => {

	const task_data_copy = JSON.parse(JSON.stringify(task_data)) as Task
	const actions = setup_state_actions()

	return html`
		<div @click=${hide_task_panel} class=panel-background>
			<form slot="form" @submit=${(e: SubmitEvent) => edit_task(task_data, actions.get_new_task_data(e))}
				class=panel>
				<h2>Edit Task</h2>
				<label for="title">Title</label>
				<input required value="${task_data.title}" name="title"/>
				<label for="description">Description</label>
				<textarea .value="${task_data.description}" name="description"></textarea>
				<label for="subtask">Subtasks</label>
				${EditableInputs(task_data_copy.subtasks.map(s => s.title), "subtask", "+ Add New Subtask")}
				<div class="current-status-box">
					<label for="current-status" class="current-status">Current Status</label>
					<select name="current-status" @change=${(e: Event) => {
						change_task_column(e, task_data)
						hide_task_panel(e)
					}}>
						${active_board?.columns?.map(({name}) => html`
						<option .selected=${name === task_data?.status}>${name}</option>
						`)}
					</select>
				</div>
				<button class="button-primary-s">Save Changes</button>
			</form>
		</div>
	`
})
