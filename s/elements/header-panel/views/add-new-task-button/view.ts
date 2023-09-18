
import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {main_styles} from "../../main-style.css.js"
import {AddNewTaskPanel} from "../add-new-task-panel/view.js"

export const AddNewTaskButton = view({styles: [styles, main_styles], shadow: true}, use => (context: context) => {

	const [panelOpen, setPanelOpen] = use.state(false)

	return html`
		<button @pointerdown=${() => setPanelOpen(!panelOpen)} class="add-new-task-btn">
			+ Add New Task
		</button>
		${panelOpen
			? AddNewTaskPanel(setPanelOpen, context)
			: null}
	`
})
