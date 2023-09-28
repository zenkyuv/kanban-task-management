import {html} from "lit"
import {view, StateSetter} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"
import {ActivePanel, ColumnsState} from "../../types.js"
import {DeleteTaskPanel} from "../delete-task-panel/view.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"

export const TaskPanelMenu = view({styles: [styles, mainStyles], shadow: true}, use => (
	context: context,
	columns_state: ColumnsState,
	activePanel: ActivePanel,
	setActivePanel: StateSetter<ActivePanel>
) => {

	const [menuOpen, setMenuOpen] = use.state(false)
	const actions = setup_state_actions(setActivePanel)

	return html`
		<img
		@pointerdown=${() => setMenuOpen(!menuOpen)}
		class="menu-dots"
		src="assets/icon-vertical-ellipsis.svg">
		${menuOpen
			? html`
				<div @pointerdown=${({target}: PointerEvent) => {
					if((target as HTMLElement).className === "panel-background")
					setMenuOpen(!menuOpen)
				}} class=panel-background>
					<div class=menu-items>
						<p class="p-edit" @pointerdown=${() => {
							setActivePanel("edit_task")
							setMenuOpen(false)
						}}>
							Edit Task
						</p>
						<p class="p-delete" @pointerdown=${() => {
							setActivePanel("delete_task")
							setMenuOpen(false)
						}}>
							Delete Task
						</p>
					</div>
				</div>
				`
		: null}

	${activePanel === "delete_task" 
		? DeleteTaskPanel(context, actions, columns_state)
		: null}
	`
})
