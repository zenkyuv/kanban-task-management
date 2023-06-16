import {view} from "@chasemoskal/magical"

import {html} from "lit"
import {Data} from "../../../types"
import {renderAddBoardPanel} from "../renderers/render-add-board-panel.ts.js"

export const CreateBoard = view({}, use => (
	{
		state: { track, state: { data } },
		actions: { setData }
	}: Data) => {

	const [boards, setBoards] = use.state(() => data.boards)
	const [newBoardPanelOpened, setNewBoardPanelOpened] = use.state(false)
	const [newBoards, setNewBoards] = use.state<string[]>(["Todo", "Doing"])

	use.setup(() => track(({ data: { boards }}) => setBoards(boards)))

	return html`
		<div class="create-board-btn">
			<img src="/assets/icon-board.svg" />
			<button @pointerdown=${(e: PointerEvent) => setNewBoardPanelOpened(true)
		}>+Create New Board</button>
		</div>
		${newBoardPanelOpened
			? renderAddBoardPanel(setNewBoardPanelOpened, setData, newBoards, setNewBoards)
			: null}
	`
})