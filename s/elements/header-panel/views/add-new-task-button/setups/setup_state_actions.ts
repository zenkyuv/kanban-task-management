
import {StateSetter} from "@chasemoskal/magical"

export function setup_state_actions (
		setPanelOpen: StateSetter<boolean>,
	) {
		return {
			hide_panel: (e: PointerEvent) => {
				if ((e.target as HTMLElement).className === "panel-background")
					setPanelOpen(false)
			},
		}
	}
