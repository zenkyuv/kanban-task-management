import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {Task} from "../../../../types.js"
import {context} from "../../../../main.js"
import {TaskPanel} from "../task-panel/view.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"

export const Columns = view({styles, shadow: true}, use => (
	context: context
) => {

	const [taskViewData, setTaskViewData] = use.state<null | Task>(null)
	const actions = setup_state_actions(taskViewData, setTaskViewData)

	return html`
		<div class=columns>
			${context.state.active_board?.columns?.map(({tasks, name}) => html`
			<div class=column>
				<h2 class="column-name">${name}</h2>
				<div ?data-notasks=${!(!!tasks)} class=tasks>${tasks?.map(task => html`
					<div @pointerup=${() => setTaskViewData(task)} class=task>
						<h2>${task.title}</h2>
						<p>${task.subtasks.filter(({isCompleted}) => isCompleted).length} out of ${task.subtasks.length}</p>
					</div>`)}
				</div>
			</div>`)}
			${taskViewData
				? TaskPanel(actions, context)
				: null}
		</div>
	`
})
