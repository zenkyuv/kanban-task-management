import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {Data, Task} from "../../../types"
import {renderTaskPanel} from "../renderers/render-task-panel.js"

export const Columns = view({}, use => ({state: {track, state: {data}}, actions: {setData}}: Data) => {

	const [boards, setBoards] = use.state(data.boards)
	const [taskViewData, setTaskViewData] = use.state<null | Task>(null)
	const [openedBoard, setOpenedBoard] = use.state("")
	use.setup(() => track(({ data, openedBoard },) => {
		setBoards(data.boards)
		setOpenedBoard(openedBoard)
	}))

	return html`
		<div class=columns>
			${boards.find(board => board.name == openedBoard)?.columns.map(({ tasks, name }) => html`
			<div class=column>
				<h2 class="column-name">${name}</h2>
				<div class=tasks>${tasks.map(data => html`
					<div @pointerdown=${() => setTaskViewData(data)} class=task>
						<h2>${data.title}</h2>
						<p>${data.subtasks.filter(({ isCompleted }) => isCompleted).length} out of ${data.subtasks.length}</p>
					</div>`)}
				</div>
			</div>`)}
			${taskViewData ? renderTaskPanel(taskViewData, setTaskViewData) : null}
		</div>
	`
})