import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {Data, Task} from "../../../types"
import {renderTaskPanel} from "../renderers/render-task-panel.js"

export const Columns = view({}, use => ({state: {track, state: {data}}, actions: {setData}}: Data) => {

	const [boards, setBoards] = use.state(data.boards)
	const [taskViewData, setTaskViewData] = use.state<null | Task>(null)
	const [openedBoardName, setOpenedBoardName] = use.state("")
	use.setup(() => track(({ data, openedBoard }) => {
		setBoards(data.boards)
		setOpenedBoardName(openedBoard)
	}))

	const openedBoard = data.boards.find(board => board.name == openedBoardName)

	return html`
		<div class=columns>
			${openedBoard?.columns?.map(({ tasks, name }) => html`
			<div class=column>
				<h2 class="column-name">${name}</h2>
				<div ?data-notasks=${!(!!tasks)} class=tasks>${tasks?.map(data => html`
					<div @pointerdown=${() => setTaskViewData(data)} class=task>
						<h2>${data.title}</h2>
						<p>${data.subtasks.filter(({ isCompleted }) => isCompleted).length} out of ${data.subtasks.length}</p>
					</div>`)}
				</div>
			</div>`)}
			${taskViewData
				? renderTaskPanel(taskViewData, setTaskViewData, openedBoard, setData, data)
				: null}
		</div>
	`
})