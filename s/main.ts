import {css} from "@chasemoskal/magical"
import {CueGroup, pass_context_to_elements, register_elements, theme_elements, update_elements_on_cue_changes} from "@benev/frog"

import data from "./data.js"
import {MainPanel} from "./elements/main-panel/element.js"
import {HeaderPanel} from "./elements/header-panel/element.js"
import {SidebarPanel} from "./elements/sidebar-panel/element.js"

const boardsData = {
	boardsData: data,
	activeBoardName: "Platform Launch",
	themeMode: "light"
}

// trackChangesAndSaveToLocalStorage(state.track)

export class Context {
	cues = new CueGroup()
	data = this.cues.create(boardsData)
}

export const context = new Context()

const themeMode = css`

	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: Plus Jakarta Sans;
		}
`
const elements = {
	MainPanel,
	HeaderPanel,
	SidebarPanel
}

register_elements(
	theme_elements(themeMode,
		update_elements_on_cue_changes(context.cues,
			pass_context_to_elements(context, elements)
		)
	)
)