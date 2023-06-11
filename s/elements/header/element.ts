import {Data} from "../../types"
import {LitElement, html} from "lit"
import {mixinContextRequirement} from "@chasemoskal/magical"

export class Header extends mixinContextRequirement<Data>()(LitElement) {
	render() {
		const data = this.context
		return html`<p>data: ${data}</p>`
	}
}