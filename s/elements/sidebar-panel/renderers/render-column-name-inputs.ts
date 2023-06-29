import {html} from "lit"
import {CreateBoardButtonState} from "../../../types.js"

export function renderColumnNameInputs({get_inputs, set_input_value, remove_input}: CreateBoardButtonState) {
	return get_inputs().map((newColumn, i) => html`
		<div class="new-column">
			<input
				.value="${newColumn}"
				name="board-column-name"
				@input=${(e: InputEvent) => set_input_value(i, e)}
			/>
			<img
				@pointerdown=${() => remove_input(i)}
				src="/assets/icon-cross.svg"/>
		</div>
	`)
}