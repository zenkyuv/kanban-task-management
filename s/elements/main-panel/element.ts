import {html} from "lit"
import {QuickElement} from "@benev/frog"

import {styles} from "./style.js"
import {context} from "../../main.js"
import {Columns} from "./views/columns/view.js"

export const MainPanel = (context: context) => class extends QuickElement {
	static styles = styles
	#unsub = context.on_state_change(() => this.requestUpdate())

	render() {
		return html`
			${Columns(context)}
		`
	}
}
