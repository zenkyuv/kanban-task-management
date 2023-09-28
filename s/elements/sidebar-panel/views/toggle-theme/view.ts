import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"

export const ToggleTheme = view({styles, shadow: true}, use => (
	{actions: {set_theme}}: context
) => {

	const [active, setActive] = use.state(false)

	return html`
		<img src="assets/icon-light-theme.svg" />
		<button @pointerdown=${() => {setActive(!active); set_theme()}}>
			<div class="circle" ?data-active=${active}></div>
		</button>
		<img src="assets/icon-dark-theme.svg" />
	`
})
