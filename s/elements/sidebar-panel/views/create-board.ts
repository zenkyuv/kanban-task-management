import {view} from "@chasemoskal/magical"

import {html} from "lit"
import {Data} from "../../../types"

export const CreateBoard = view({}, use => (
	{
		state: { track, state: { data } },
		actions: { setData }
	}: Data) => {

	const [boards, setBoards] = use.state(() => data.boards)

	use.setup(() => track(({ data: { boards }}) => setBoards(boards)))

	return html`
		<div class="create-board-btn">
			<img src="/assets/icon-board.svg" />
			<button @pointerdown=${() => {
			setData({
				boards: [{
					name: "new board",
					columns: [{
						name: "column", tasks: [{
							title: "title", description: "description", status: "status", subtasks: [{ title: "title", isCompleted: false }]
						}]
					}]
				}]
			})
			}}>+Create New Board</button>
		</div>
	`
})