import {html} from "lit"
import {StateSetter, view} from "@chasemoskal/magical"

import {Boards} from "../../../types"
import {createNewBoard} from "../utils/create-new-board.js"
import {renderColumnNameInputs} from "../renderers/render-column-name-inputs.js"

export const AddBoardPanel = view({}, use => (
	{
		setNewBoardPanelOpened,
		setData,
	}: {
		setNewBoardPanelOpened: StateSetter<boolean>
		setData: ({ boards }: Boards) => void
	}) => {

	const [newBoardData, setNewBoardData] = use.state({
		boardName: "",
		columns: ["Todo", "Doing"]
	})

	return html`
		<div @pointerdown=${(e: PointerEvent) => {
			const target = e.target as HTMLElement
			if (target.className === "add-board-panel-background")
				setNewBoardPanelOpened(false)
			}} class=add-board-panel-background>
			<div class=add-board-panel>
				<h2>Add New Board</h2>
				<label for="board-name">Board Name</label>
				<input
					@input=${(e: InputEvent) => setNewBoardData({...newBoardData, boardName: (e.target as HTMLInputElement).value})}
					class="board-name"
					name=board-name />
				<label for="board-column-name">Board Columns</label>
				${renderColumnNameInputs(newBoardData.columns, setNewBoardData)}
				<div class="buttons">
					<button class="add-column-btn" @pointerdown=${() => setNewBoardData({...newBoardData, columns: [...newBoardData.columns, ""]})}>
						+Add New Column
					</button>
					<button class="create-new-board-btn" @pointerdown=${() => createNewBoard({setData, newBoardData})}>Create New Board</button>
				</div>
			</div>
		</div>
	`
})