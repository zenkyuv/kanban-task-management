import { StateSetter } from "@chasemoskal/magical";
import { html } from "lit";
import { renderSubtasksInputs } from "./render-subtasks-inputs.js";
import { AddNewTaskState } from "../../../types.js";

export function renderAddNewTaskPanel({...state}: AddNewTaskState) {
	return html`
		<div @pointerdown=${state.hide_add_new_task_panel} class="panel-background">
			<form class="add-new-task-panel">
				<h2>Add New Task</h2>
				<label for="title">Title</label>
				<input name="title" />
				<label for="description">Description</label>
				<input name="description" />
				<label for="subtask">Subtasks</label>
				${renderSubtasksInputs(state)}
				<button type="button" @pointerdown=${state.add_subtask_input} class="add-subtask-btn">
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
}