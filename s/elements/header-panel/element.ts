import {html} from "lit"
import {QuickElement} from "@benev/frog"

import {context} from "../../main.js"
import {styles} from "./styles.css.js"
import {Header} from "./views/header/view.js"
import {HeaderMenu} from "./views/header-menu/view.js"
import {AddNewTaskButton} from "./views/add-new-task-button/view.js"

export const HeaderPanel = (context: context) => class extends QuickElement {
	static styles = styles
	#unsub = context.on_state_change(() => this.requestUpdate())

	render() {
		return html`
			<header class=row>
				${Header(context)}
				${AddNewTaskButton(context)}
				${HeaderMenu(context)}
			</header>
		`
	}
}
