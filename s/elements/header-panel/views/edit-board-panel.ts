import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {HeaderMenuState} from "../types"
import {ContextManager} from "../utils/context_manager"
import {setup_edit_board_panel_actions} from "../action-setups/setup_edit_board_panel_actions.js"

export const EditBoardPanel = view({}, use => (
	{hide_panel}: HeaderMenuState,
	{active_board, edit_board_save_changes, get_column_names}: ContextManager) => {

	const [columnNameInputs, setColumnNameInputs] = use.state([...get_column_names])
	
	const actions = setup_edit_board_panel_actions(columnNameInputs, setColumnNameInputs)
	
	return html`
		<div @pointerdown=${hide_panel} class="panel-background">
			<form @submit=${edit_board_save_changes} class=edit-board-panel>
				<h2>Edit board</h2>
				<label for="board name">Board Name</label>
				<input .value=${active_board!.name} name="board name" />
				<label>Board Columns</label>
				${actions.get_columns_inputs()?.map((_, i) => html`
					<div class="flex-row">
						<input name="board column name" value=${get_column_names[i]} />
						<img
							@pointerdown=${() => actions.remove_column_name_input(i)}
							src="/assets/icon-cross.svg"/>
					</div>
				`)}
				<button @pointerdown=${actions.add_column_input} class="add-column-btn">+ Add New Column</button>
				<button type="submit" class="save-changes-btn">Save Changes</button>
			</form>
		</div>
	`
	}) 