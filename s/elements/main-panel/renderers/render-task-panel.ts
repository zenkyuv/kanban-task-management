import {html} from "lit"
import {StateSetter} from "@chasemoskal/magical"

import {Boards, Columns, Task} from "../../../types.js"
import {moveTaskToAnotherColumn} from "../utils/move-task-to-another-column.js"

export function renderTaskPanel(
	task: Task,
	setTaskViewData: StateSetter<Task | null>,
	openedBoard: {
		name: string
		columns: Columns
	} | undefined,
	setData: ({ boards }: Boards) => void,
	data: Boards
) {

	return html`
		<div
			@pointerdown=${(e: PointerEvent) => {
				if ((e.target as HTMLElement).className === "task-panel-background")
					setTaskViewData(null)
				}
			}
			class="task-panel-background">
			<div class="task-panel">
				<h2>${task.title}</h2>
				<p class="description">${task.description}</p>
				<div class=subtasks>
					<p>Subtasks (${task.subtasks.filter(({isCompleted}) => isCompleted).length} out of ${task.subtasks.length})</p>
					${task.subtasks.map(({ title, isCompleted }, i) => html`
						<div ?data-checked="${isCompleted}" class=subtask>
							<input ?checked=${isCompleted} name="subtask-${i}" type="checkbox">
							<label for="subtask-${i}">${title}</label>
						</div>
					`)}
				</div>
				<div class="current-status-box">
					<p class="current-status">Current Status</p>
					<select @change=${(e: Event) => moveTaskToAnotherColumn(e, openedBoard, data, task, setData)}>
						${openedBoard?.columns?.map(({name}) => html`
						<option .selected=${name === task.status}>${name}</option>
						`)}
					</select>
				</div>
			</div>
		</div>
	`
}