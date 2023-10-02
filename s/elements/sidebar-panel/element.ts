import {html} from "lit"
import {QuickElement} from "@benev/frog"

import {context} from "../../main"
import {styles} from "./style.css.js"
import {HideSidebar} from "./views/hide-sidebar/view.js"
import {ToggleTheme} from "./views/toggle-theme/view.js"
import {BoardButtons} from "./views/board-buttons/view.js"
import {CreateBoardButton} from "./views/create-board/view.js"

export const SidebarPanel = (context: context) => class extends QuickElement {
	static styles = styles
	#unsub = context.on_state_change(() => this.requestUpdate())

	render() {
		return html`
			<div ?data-open=${context.state.sidebar_open} class=column>
				<h1 class="sidebar-header"><img src="assets/logo-light.svg"/></h1>
				<p class="all-boards">ALL BOARDS ${context.state.data.boards.length}</p>
				${BoardButtons(context)}
				${CreateBoardButton(context)}
			</div>
			<div ?data-open=${context.state.sidebar_open} class=column>
				${ToggleTheme(context)}
				${HideSidebar(context)}
			</div>

			<button @click=${context.actions.toggle_sidebar} class="eye-open" ?data-closed=${!context.state.sidebar_open}>
				<img src="assets/icon-show-sidebar.svg" />
			</button>
		`
	}
}
