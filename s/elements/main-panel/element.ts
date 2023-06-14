import {LitElement, html} from "lit"
import {mixinContextRequirement, mixinCss} from "@chasemoskal/magical"

import {Data} from "../../types"
import {styles} from "./style.css.js"
import {Columns} from "./views/columns.js"

@mixinCss(styles)
export class MainPanel extends mixinContextRequirement<Data>()(LitElement) {
	render() {
		const data = this.context
		return html`
			${Columns(data)}
		`
	}
}