import {view} from "@chasemoskal/magical"

import {html} from "lit"
import {Data} from "../../../types"

export const BoardButtons = view({}, use => (
	{
		state: { track, state: { data } },
		actions: { setOpenedBoard }
	}: Data) => {

	const [boards, setBoards] = use.state(data.boards)
	use.setup(() => track(({data: {boards}}) => setBoards(boards)))

	return html`
		<div class="board-buttons">${boards.map(({ name }, i) =>
			html`
			<div class="board-button" ?data-active=${i == 0}>
				<img src="/assets/icon-board.svg"/>
				<button @pointerdown=${() => setOpenedBoard(name)}>${name}</button>
			</div>`)}
		</div>
	`
})