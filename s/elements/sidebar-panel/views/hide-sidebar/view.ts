import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"

export const HideSidebar = view({styles: [styles, mainStyles], shadow: true}, use => (
	{actions: {toggle_sidebar}}: context
) => {

	return html`
		<img src="assets/icon-hide-sidebar.svg" />
		<button class="hide-sidebar" @click=${toggle_sidebar}>Hide Sidebar</button>
	`
})

