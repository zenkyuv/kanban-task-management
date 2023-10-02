
import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"
import {AddNewTaskPanel} from "../add-new-task-panel/view.js"

export const AddNewTaskButton = view({styles: [styles, mainStyles], shadow: true}, use => (
	context: context
) => {

	const [panelOpen, setPanelOpen] = use.state(false)

	return html`
		<button @click=${() => setPanelOpen(!panelOpen)} class="button-primary-l ebe">
			<span>+ Add New Task</span>
			<img src="assets/icon-add-task-mobile.svg" />
		</button>
		${panelOpen
			? AddNewTaskPanel(setPanelOpen, context)
			: null}
	`
})
