import {html} from "lit"
import {QuickElement} from "@benev/frog"

import {Context} from "../../main"
import {styles} from "./style.css.js"
import {HeaderMenu} from "./views/header-menu.js"
import {AddNewTaskButton} from "./views/add-new-task-button.js"
import {setup_context_manager} from "./utils/setup_context_manager.js"

export const HeaderPanel = (context: Context) => class extends QuickElement {
	static styles = styles
	
	render() {

		const context_manager = setup_context_manager(
			context.data.value,
			() => context.data.publish()
		)

		return html`
			<header class=row>
				<div class="main-header"><h1>Platform Launch</h1></div>
				${AddNewTaskButton(context_manager)}
				${HeaderMenu(context_manager)}
			</header>
		`
	}
}