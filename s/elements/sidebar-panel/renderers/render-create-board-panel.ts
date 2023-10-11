import {html} from "lit"

import {context} from "../../../main.js"
import {CreateBoardState} from "../../../types.js"
import {EditableInputs} from "../../views/editable-inputs/view.js"

export function renderCreateBoardPanel(
	{...state}: CreateBoardState,
	{actions: {add_new_board}}: context) {

	return html`
		<div
			@click=${state.hide_create_board_panel}
			class=panel-background>
			<form @submit=${(e: SubmitEvent) => add_new_board(state.get_board_data(e))} class=panel>
				<h2>Add New Board</h2>
				<label for="board-name">Board Name</label>
				<input
					required
					placeholder="e.g. Web Design"
					name=board-name 
				/>
				<label for="board-column-name">Board Columns</label>
				${EditableInputs(state.get_inputs(), "board-column-name", "+ Add New Column")}
				<div class="buttons">
					<button type="submit" class="button-primary-s">
						Create New Board
					</button>
				</div>
			</form>
		</div>
	`
}
