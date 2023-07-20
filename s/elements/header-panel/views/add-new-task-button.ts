import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {AddNewTaskPanel} from "./add-new-task-panel.js"
import {ContextManager} from "../utils/context_manager.js"

export const AddNewTaskButton = view({}, use => (cm: ContextManager) => {

	const [panelOpen, setPanelOpen] = use.state(false)

	return html`
		<button @pointerdown=${() => setPanelOpen(!panelOpen)} class="add-new-task-btn">
			+ Add New Task
		</button>
		${panelOpen
			? AddNewTaskPanel(setPanelOpen, cm)
			: null}
	`
})