import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {HeaderMenuState} from "../types"
import {ContextManager} from "../utils/context_manager"

export const DeleteBoardPanel = view({}, use => (
	{hide_panel}: HeaderMenuState,
	{delete_board}: ContextManager) => {

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