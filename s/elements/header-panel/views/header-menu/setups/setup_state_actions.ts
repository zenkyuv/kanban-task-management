
import {StateSetter} from "@chasemoskal/magical"
import {ActivePanel} from "../../../../../types.js"

export function setup_state_actions(setActivePanel: StateSetter<ActivePanel>) {
	return {
		hide_panel: (e: PointerEvent) => {
			if ((e.target as HTMLElement).className === "panel-background" || (e.target as HTMLElement).className === "btn-cancel")
				setActivePanel("")
		}
	}
}
