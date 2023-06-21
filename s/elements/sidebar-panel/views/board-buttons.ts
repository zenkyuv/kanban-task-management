import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {Data} from "../../../types"

export const BoardButtons = view({}, use => (
	{
		state: {state: {data: {boards}}},
		actions: {setOpenedBoardName}
	}: Data) => {


	return html`
		<div class="board-buttons">${boards.map(({ name }, i) => html`
			<div class="board-button" ?data-active=${i == 0}>
				<img src="/assets/icon-board.svg"/>
				<button @pointerdown=${() => setOpenedBoardName(name)}>
					${name}
				</button>
			</div>`)}
		</div>
	`
})