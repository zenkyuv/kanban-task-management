import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {ContextManager} from "../../../types"

export const ToggleTheme = view({}, use => ({setTheme}: ContextManager) => {
	const [active, setActive] = use.state(false)
	return html`
		<div class="toggle-theme">
			<img src="/assets/icon-light-theme.svg" />
			<button @pointerdown=${() => {setActive(!active); setTheme()}} class="toggle-btn">
				<div class="circle" ?data-active=${active}></div>
			</button>
			<img src="/assets/icon-dark-theme.svg" />
		</div>
	`
})