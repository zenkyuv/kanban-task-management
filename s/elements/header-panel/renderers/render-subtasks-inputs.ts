import {html} from "lit";
import {AddNewTaskState} from "../types";


export function renderSubtasksInputs(
{
	get_subtasks,
	is_input_valid,
	remove_column_name_input
}: AddNewTaskState) {
	return get_subtasks().map(({placeholder, value}, i) => html`
		<div class="subtask flex-row">
			<input
				placeholder=${placeholder}
				value=${value}
				?data-invalid=${!is_input_valid("subtasks", i)}
				name="subtask" />
			<img
				@pointerdown=${() => remove_column_name_input(i)}
				src="/assets/icon-cross.svg"/>
				${!is_input_valid("subtasks", i)
				? html`<span class=err-msg>Can't be empty</span>` 
				: null}
		</div>
	`)
}