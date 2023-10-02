

import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"

export const Header = view({styles: [styles, mainStyles], shadow: true}, use => (
	context: context
) => {

	const [sidebarOpen, setSidebarOpen] = use.state(false)

	return html`
		<div class="main-header">
			<img src="assets/logo-mobile.svg" class="icon" />
			<h1 @click=${() => setSidebarOpen(!sidebarOpen)}>
				Platform Launch
				<img src="assets/icon-chevron-down.svg" />
			</h1>
		</div>
		${sidebarOpen
			?	html`
				<div @click=${(e: PointerEvent) => {
					if ((e.target as HTMLElement).className === "panel-background")
					setSidebarOpen(!sidebarOpen)}
				} class="panel-background">
					<sidebar-panel>
				</div>
			`
			: null
		}
	`
})
