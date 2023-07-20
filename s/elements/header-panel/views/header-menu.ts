import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {ActivePanel} from "../../../types.js"
import {panels} from "../utils/get_active_panel.js"
import {ContextManager} from "../utils/context_manager.js"
import {setup_header_menu_actions} from "../action-setups/setup_header_menu_actions.js"

export const HeaderMenu = view({}, use => (context_manager: ContextManager) => {

	const [menuOpen, setMenuOpen] = use.state(false)
	const [activePanel, setActivePanel] = use.state<ActivePanel>("")

	const actions = setup_header_menu_actions(
		setActivePanel
	)

	return html`
		<img
			@pointerdown=${() => setMenuOpen(!menuOpen)}
			class="menu-dots"
			src="/assets/icon-vertical-ellipsis.svg">

		${menuOpen
			? html`
				<div @pointerdown=${({target}: PointerEvent) => {
					if((target as HTMLElement).className === "panel-background")
					setMenuOpen(!menuOpen)
				}} class=panel-background>
					<div class=menu-items>
						<p class="p-edit" @pointerdown=${() => {
							setActivePanel("edit_board_panel")
							setMenuOpen(false)
							}}>
							Edit Board
						</p>
						<p class="p-delete" @pointerdown=${() => {
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
			? panels[activePanel](actions, context_manager)
			: null}
	`
})