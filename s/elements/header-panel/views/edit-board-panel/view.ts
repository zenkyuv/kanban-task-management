import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main"
import {HeaderMenuState} from "../../types"
import {mainStyles} from "../../../../main-styles.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"
import {EditableInputs} from "../../../views/editable-inputs/view.js"

export const EditBoardPanel = view({styles: [styles, mainStyles], shadow: true}, use => (
	{hide_panel}: HeaderMenuState,
	{actions: {edit_board, get_column_names}, state: {active_board}}: context
) => {

	const [columnNameInputs, setColumnNameInputs] = use.state([...get_column_names()!])
	const actions = setup_state_actions(columnNameInputs, setColumnNameInputs)
	
	return html`
		<div @pointerdown=${hide_panel} class="panel-background">
			<form @submit=${(e: SubmitEvent) => edit_board(actions.get_board_data(e))} 
				class=panel>
				<h2>Edit board</h2>
				<label for="board name">Board Name</label>
				<input required .value=${active_board!.name} name="board name" />
				<label>Board Columns</label>
				${EditableInputs(actions.get_columns_inputs(), "board-column-name", "+ Add New Column")}
				<button type="submit" class="button-primary-s">Save Changes</button>
			</form>
		</div>
	`
})
