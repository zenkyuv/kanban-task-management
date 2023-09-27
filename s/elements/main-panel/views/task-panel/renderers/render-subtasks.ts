import {html} from "lit"

import {Task} from "../../../../../types.js"
import {context} from "../../../../../main.js"

export function renderSubtasks(task: Task | null, context: context) {
	return html`
		<p>Subtasks (${task?.subtasks.filter(({isCompleted}) => isCompleted).length} out of ${task?.subtasks.length})</p>
		${task?.subtasks.map((subtask, i) => html`
			<div @pointerdown=${() => context.actions.toggle_subtask_completion(subtask)}
				?data-checked="${subtask.isCompleted}"
				class=subtask
				>
				<input ?checked=${subtask.isCompleted} name="subtask-${i}" type="checkbox">
				<label for="subtask-${i}">${subtask.title}</label>
			</div>
		`)}
	`
}
