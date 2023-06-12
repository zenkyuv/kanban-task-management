import {LitElement, html} from "lit"
import {mixinContextRequirement, mixinCss} from "@chasemoskal/magical"

import {Data} from "../../types"
import {styles} from "./style.css.js"
import {CreateBoard} from "./views/create-board.js"
import {ToggleTheme} from "./views/toggle-theme.js"
import {HideSidebar} from "./views/hide-sidebar.js"
import {BoardButtons} from "./views/board-buttons.js"

@mixinCss(styles)
export class SidebarPanel extends mixinContextRequirement<Data>()(LitElement) {
	render() {
		const data = this.context
		return html`
			<div class=column>
				<h1 class="sidebar-header"><img src="/assets/logo-light.svg"/></h1>
				<p class="all-boards">ALL BOARDS ${data.state.state.data.boards.length}</p>
				${BoardButtons(data)}
				${CreateBoard(data)}
			</div>
			<div class=column>
				${ToggleTheme(data)}
				${HideSidebar(data)}
			</div>
		`
	}
}