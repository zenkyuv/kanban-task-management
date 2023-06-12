import {view} from "@chasemoskal/magical"

import {html} from "lit"
import {Data} from "../../../types"

export const HideSidebar = view({}, use => ({state}: Data) => {

	return html`
		<div class="hide-sidebar">
			<img src="/assets/icon-hide-sidebar.svg" />
			<button>Hide Sidebar</button>
		</div>
	`
})