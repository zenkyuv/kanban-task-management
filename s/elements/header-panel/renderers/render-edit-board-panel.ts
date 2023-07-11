import { html } from "lit";

import {HeaderMenuState } from "../types";
import { ContextManager } from "../utils/setup_context_manager";

export function renderEditBoardPanel(
	{ hide_edit_board_panel, remove_column_name_input, add_column_input, get_columns_inputs }: HeaderMenuState,
	{ get_active_board, edit_board_save_changes }: ContextManager) {
	return html`
		<div @pointerdown=${hide_edit_board_panel} class="panel-background">
			<form @submit=${edit_board_save_changes} class=edit-board-panel>
				<h2>Edit board</h2>
				<label for="board name">Board Name</label>
				<input .value=${get_active_board!.name} name="board name" />
				<label>Board Columns</label>
				${get_columns_inputs()?.map((name, i) => html`
					<div class="flex-row">
						<input name="board column name" .value=${name} />
						<img
							@pointerdown=${() => remove_column_name_input(i)}
							src="/assets/icon-cross.svg"/>
					</div>
				`)}
				<button @pointerdown=${add_column_input} class="add-column-btn">+ Add New Column</button>
				<button type="submit" class="save-changes-btn">Save Changes</button>
			</form>
		</div>
	`
}