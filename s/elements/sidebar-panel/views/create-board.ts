import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {Data} from "../../../types"
import {addBoardPanel} from "../renderers/add-board-panel.js"

export const CreateBoard = view({}, use => (
	{
		state: {state: {data}},
		actions: {setData}
	}: Data) => {

	const [newBoardPanelOpened, setNewBoardPanelOpened] = use.state(false)
	const [newBoardData, setNewBoardData] = use.state({
		boardName: "",
		columns: ["Todo", "Doing"]
	})

	return html`
		<div class="create-board-btn">
			<img src="/assets/icon-board.svg" />
			<button @pointerdown=${() => setNewBoardPanelOpened(true)}>
				+Create New Board
			</button>
		</div>
		${newBoardPanelOpened
			? addBoardPanel(setNewBoardPanelOpened, setNewBoardData, newBoardData, setData, data)
			: null}
	`
})