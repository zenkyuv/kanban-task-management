import {html} from "lit"
import {StateSetter} from "@chasemoskal/magical"

export function columnNameInputs(
	columns: any[],
	setNewBoard: StateSetter<{
		boardName: string
		columns: string[]
	}>) {

	return columns.map((newColumn, i) => html`
		<div class="new-column">
			<input
				value="${newColumn}"
				name="board-column-name"
				@input=${(e: InputEvent) => {
					columns[i] = (e.target as HTMLInputElement).value
					setNewBoard(newBoard => ({ ...newBoard, columns: [...newBoard.columns] }))}}/>
			<img @pointerdown=${() => {
				const filtered = columns.slice(0,i).concat(newColumn.slice(i+1))
				setNewBoard(newBoard => ({
					...newBoard,
					columns: filtered
				}))
			}} src="/assets/icon-cross.svg"/>
		</div>
	`)
}