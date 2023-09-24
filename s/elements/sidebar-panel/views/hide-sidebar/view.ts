import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {mainStyles} from "../../../../main-styles.js"

export const HideSidebar = view({styles: [styles, mainStyles], shadow: true}, use => () => {
	return html`
		<img src="/assets/icon-hide-sidebar.svg" />
		<button>Hide Sidebar</button>
	`
})

