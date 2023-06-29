import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {ContextManager} from "../../../types.js"
import {renderCreateBoardPanel} from "../renderers/render-create-board-panel.js"
import {setup_state_manager} from "../utils/setup_state_manager.js"

export const CreateBoardButton = view({}, use => ({...context_manager}: ContextManager) => {

	const [isPanelOpen, setPanelOpen] = use.state(false)
	const [inputs, setInputs] = use.state(["Todo", "Doing"])

	const state_manager = setup_state_manager(setInputs, inputs, setPanelOpen)

	return html`
		<div class="create-board-btn">
			<img src="/assets/icon-board.svg" />
			<button @pointerdown=${() => setPanelOpen(true)}>
				+Create New Board
			</button>
		</div>
		${isPanelOpen
			? renderCreateBoardPanel({...state_manager}, {...context_manager})
			: null}
	`
})