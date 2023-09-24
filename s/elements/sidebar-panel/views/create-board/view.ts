import {html} from "lit"
import {view} from "@chasemoskal/magical"


import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"
import {setup_state_manager} from "../../utils/setup_state_manager.js"
import {renderCreateBoardPanel} from "../../renderers/render-create-board-panel.js"

export const CreateBoardButton = view({styles: [styles, mainStyles], shadow: true}, use => (context: context) => {

	const [isPanelOpen, setPanelOpen] = use.state(false)
	const [inputs, setInputs] = use.state(["Todo", "Doing"])

	const state_manager = setup_state_manager(setInputs, inputs, setPanelOpen)

	return html`
			<img src="/assets/icon-board.svg" />
			<a @pointerdown=${() => setPanelOpen(true)}>
				+Create New Board
			</a>

		${isPanelOpen
			? renderCreateBoardPanel(state_manager, context)
			: null}
	`
})
