import {Data} from "../../types"
import {LitElement, html} from "lit"
import {mixinContextRequirement} from "@chasemoskal/magical"

export class HeaderPanel extends mixinContextRequirement<Data>()(LitElement) {
	render() {
		const data = this.context
		return html`<p>Halo</p>`
	}
}