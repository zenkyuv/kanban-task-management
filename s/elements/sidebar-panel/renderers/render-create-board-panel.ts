import {html} from "lit"

import {renderColumnNameInputs} from "./render-column-name-inputs.js"
import {ContextManager, CreateBoardButtonState} from "../../../types.js"

export function renderCreateBoardPanel(
	{...state}: CreateBoardButtonState,
	{...cm}: ContextManager) {
	return html`
		<div
			@pointerdown=${(e: PointerEvent) => state.hide_create_board_panel(e)}
			class=add-board-panel-background>
			<form @submit=${(e: SubmitEvent) => cm.create_new_board(e)} class=add-board-panel>
				<h2>Add New Board</h2>
				<label for="board-name">Board Name</label>
				<input
					class="board-name"
					name=board-name 
				/>
				<label for="board-column-name">Board Columns</label>
				${renderColumnNameInputs({...state})}
				<div class="buttons">
					<button @pointerdown=${() => state.add_input()} class="add-column-btn">
						+Add New Column
					</button>
					<button type="submit" class="create-new-board-btn">
						Create New Board
					</button>
				</div>
			</form>
		</div>
	`
}
