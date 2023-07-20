import { StateSetter } from "@chasemoskal/magical"
import { ActivePanel } from "../../../types"

export function setup_header_menu_actions (
		setActivePanel: StateSetter<ActivePanel>,
	) {
		return {
			hide_panel: (e: PointerEvent) => {
				console.log((e.target as HTMLElement).className, (e.target as HTMLElement).className === "panel-background" || "btn-cancel")
				if ((e.target as HTMLElement).className === "panel-background" || (e.target as HTMLElement).className === "btn-cancel")
					setActivePanel("")
			}
		}
	}