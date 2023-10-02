import {html} from "lit"
import {view} from "@chasemoskal/magical"


import {styles} from "./styles.css.js"
import {context} from "../../../../main"
import {HeaderMenuState} from "../../types"
import {mainStyles} from "../../../../main-styles.js"

export const DeleteBoardPanel = view({styles: [styles, mainStyles], shadow: true}, use => (
	{hide_panel}: HeaderMenuState,
	{actions: {delete_board}}: context
) => {

	return html`
		<div @click=${hide_panel} class="panel-background">
			<div class="panel">
				<h2>Delete this board?</h2>
				<p>Are you sure you want to delete the 'Platform Launch' board? This action will remove all columns and tasks and cannot be reversed.</p>
				<div class="btn-row">
					<button @click=${(e: PointerEvent) => {
						delete_board()
						hide_panel(e)
					}}
					class="button-destructive">
						Delete
					</button>
					<button @click=${hide_panel} class="button-secondary">Cancel</button>
				</div>
			</div>
		</div>
	`
})
