import {snapstate} from "@chasemoskal/snapstate"
import {css, registerElements, themeElements} from "@chasemoskal/magical"

import data from "./data.js"
import {MainPanel} from "./elements/main-panel/element.js"
import {HeaderPanel} from "./elements/header-panel/element.js"
import {SidebarPanel} from "./elements/sidebar-panel/element.js"

const state = snapstate({
	data,
	openedBoard: "",
	themeMode: "light"
})

export const actions = {
	setOpenedBoard(board: string) {
		state.state.openedBoard = board
	},
	setThemeMode(mode: string) {
		state.state.themeMode = mode
	},
	setData({boards}: typeof data) {
		state.state.data.boards = [...state.state.data.boards, ...boards]
	}
}

const context = {
	state,
	actions
}

const themeMode = css`
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
`

registerElements(themeElements(
	themeMode,
	{
		MainPanel: MainPanel.withContext(context),
		HeaderPanel: HeaderPanel.withContext(context),
		SidebarPanel: SidebarPanel.withContext(context)
	},
))

