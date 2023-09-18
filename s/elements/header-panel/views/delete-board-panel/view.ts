import {html} from "lit"
import {view} from "@chasemoskal/magical"


import {styles} from "./styles.css.js"
import {context} from "../../../../main"
import {HeaderMenuState} from "../../types"
import {main_styles} from "../../main-style.css.js"

export const DeleteBoardPanel = view({styles: [styles, main_styles], shadow: true}, use => (
	{hide_panel}: HeaderMenuState,
	{actions: {delete_board}}: context) => {

	return html`
		<div @pointerdown=${hide_panel} class="panel-background">
			<div class="delete-board-panel">
				<h2 class="h2-delete">Delete this board?</h2>
				<p>Are you sure you want to delete the 'Platform Launch' board? This action will remove all columns and tasks and cannot be reversed.</p>
				<div class="btn-row">
					<button @pointerdown=${delete_board} class="btn-delete">Delete</button>
					<button @pointerdown=${hide_panel} class="btn-cancel">Cancel</button>
				</div>
			</div>
		</div>
	`
})
