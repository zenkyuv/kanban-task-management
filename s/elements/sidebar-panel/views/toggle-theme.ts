import {view} from "@chasemoskal/magical"

import {html} from "lit"
import {Data} from "../../../types"

export const ToggleTheme = view({}, use => (
	{
		state: { track, state: { data, themeMode } },
		actions: { setOpenedBoard, setThemeMode }
	}: Data) => {

	const [active, setActive] = use.state(false)

	return html`
		<div class="toggle-theme">
			<img src="/assets/icon-light-theme.svg" />
			<button class="toggle-btn"
				@pointerdown=${() => { setThemeMode(themeMode === "light" ? "dark" : "light"), setActive(!active)}}>
				<div class="circle" ?data-active=${active}></div>
			</button>
			<img src="/assets/icon-dark-theme.svg" />
		</div>
	`
})