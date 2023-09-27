import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"
import {ActivePanel, ColumnsState} from "../../types.js"
import {EditTaskPanel} from "../edit-task-panel/view.js"
import {TaskPanelMenu} from "../task-panel-menu/view.js"
import {renderSubtasks} from "./renderers/render-subtasks.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"

export const TaskPanel = view({styles: [styles, mainStyles], shadow: true}, use => (
	columns_state: ColumnsState,
	context: context
) => {

	const [activePanel, setActivePanel] = use.state<ActivePanel>("")
	const actions = setup_state_actions(context)
	const {hide_task_panel, task_data} = columns_state

	return html`
		${activePanel === "edit_task"
			? EditTaskPanel(context, columns_state, actions)
			: html`
		<div
			@pointerup=${hide_task_panel}
			class="panel-background">
			<div class="panel">
				<div class="flex-row">
					<h2>${task_data?.title}</h2>
					${TaskPanelMenu(context, columns_state, activePanel, setActivePanel)}
				</div>
				${task_data?.description
					? html`<p class="description">${task_data?.description}</p>`
					: null
				}
				<div class=subtasks>
					${renderSubtasks(task_data, context)}
				</div>
				<div class="current-status-box">
					<label for="status">Current Status</label>
					<select name="status" @change=${(e: Event) => {
						actions.change_task_column(e, task_data)
						hide_task_panel(e)
					}}>
						${context.state.active_board?.columns?.map(({name}) => html`
						<option .selected=${name === task_data?.status}>${name}</option>
						`)}
					</select>
				</div>
			</div>
		</div>
		`}
	`
})
