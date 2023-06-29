import {html} from "lit"
import {QuickElement} from "@benev/frog"

import {Context} from "../../main"
import {styles} from "./style.css.js"
import {ToggleTheme} from "./views/toggle-theme.js"
import {HideSidebar} from "./views/hide-sidebar.js"
import {BoardButtons} from "./views/board-buttons.js"
import {CreateBoardButton} from "./views/create-board.js"
import {setup_context_manager} from "./utils/setup_context_manager.js"

export const SidebarPanel = (context: Context) => class extends QuickElement {
	static styles = styles

	render() {

		const context_manager = setup_context_manager(
			context.data.value,
			() => context.data.publish()
		)

		return html`
			<div class=column>
				<h1 class="sidebar-header"><img src="/assets/logo-light.svg"/></h1>
				<p class="all-boards">ALL BOARDS ${context_manager.getBoards().length}</p>
				${BoardButtons(context_manager)}
				${CreateBoardButton(context_manager)}
			</div>
			<div class=column>
				${ToggleTheme(context_manager)}
				${HideSidebar()}
			</div>
		`
	}
}