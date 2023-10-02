import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {ActivePanel} from "../../../../types.js"
import {panels} from "../../utils/get_active_panel.js"
import {mainStyles} from "../../../../main-styles.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"

export const HeaderMenu = view({styles: [styles, mainStyles], shadow: true}, use => (
	context: context
) => {

	const [menuOpen, setMenuOpen] = use.state(false)
	const [activePanel, setActivePanel] = use.state<ActivePanel>("")

	const actions = setup_state_actions(setActivePanel)

	return html`
		<img
			@click=${() => setMenuOpen(!menuOpen)}
			class="menu-dots"
			src="assets/icon-vertical-ellipsis.svg">

		${menuOpen
			? html`
				<div @click=${({target}: PointerEvent) => {
					if((target as HTMLElement).className === "panel-background")
					setMenuOpen(!menuOpen)
				}} class=panel-background>
					<div class=menu-items>
						<p class="p-edit" @click=${() => {
							setActivePanel("edit_board_panel")
							setMenuOpen(false)
							}}>
							Edit Board
						</p>
						<p class="p-delete" @click=${() => {
							setActivePanel("delete_board_panel")
							setMenuOpen(false)
							}}>
							Delete Board
						</p>
					</div>
				</div>
				`
			: null}

		${activePanel
			? panels[activePanel](actions, context)
			: null}
	`
})
