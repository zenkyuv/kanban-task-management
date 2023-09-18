
import {StateSetter} from "@chasemoskal/magical"

import {ActivePanel} from "../../../types.js"

export function setup_state_actions(setActivePanel: StateSetter<ActivePanel>) {
	return {
		hide_menu_panel: ({target}: PointerEvent) => {
			if ((target as HTMLElement).className === "menu-background") {
				setActivePanel("")
			}
		}
	}
}

