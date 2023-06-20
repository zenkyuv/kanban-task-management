import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {Data} from "../../../types"
import {AddBoardPanel} from "./add-board-panel.js"

export const CreateBoard = view({}, use => (
	{
		state: { track, state: { data } },
		actions: { setData }
	}: Data) => {

	const [boards, setBoards] = use.state(() => data.boards)
	const [newBoardPanelOpened, setNewBoardPanelOpened] = use.state(false)

	use.setup(() => track(({ data: { boards }}) => setBoards(boards)))

	return html`
		<div class="create-board-btn">
			<img src="/assets/icon-board.svg" />
			<button @pointerdown=${(e: PointerEvent) => setNewBoardPanelOpened(true)
		}>+Create New Board</button>
		</div>
		${newBoardPanelOpened
			? AddBoardPanel({setNewBoardPanelOpened, setData})
			: null}
	`
})