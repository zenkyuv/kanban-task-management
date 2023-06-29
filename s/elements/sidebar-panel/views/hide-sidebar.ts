import {view} from "@chasemoskal/magical"

import {html} from "lit"

export const HideSidebar = view({}, use => () => {
	return html`
		<div class="hide-sidebar">
			<img src="/assets/icon-hide-sidebar.svg" />
			<button>Hide Sidebar</button>
		</div>
	`
})