import { html } from "lit";
import { AddNewTaskState } from "../../../types";

export function renderSubtasksInputs({get_subtasks_inputs}: AddNewTaskState) {
	return html`
		${get_subtasks_inputs().map(subtask_input => html`
			<input name="subtask" />
		`)}
	`
}