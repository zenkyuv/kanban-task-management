import data from "./data.js"
import {registerElements} from "@chasemoskal/magical"
import {MainPanel} from "./elements/main-panel/element.js"
import {HeaderPanel} from "./elements/header-panel/element.js"
import {SidebarPanel} from "./elements/sidebar-panel/element.js"

const context = data

registerElements({
	MainPanel: MainPanel.withContext(context),
	HeaderPanel: HeaderPanel.withContext(context),
	SidebarPanel: SidebarPanel.withContext(context)
	}
)