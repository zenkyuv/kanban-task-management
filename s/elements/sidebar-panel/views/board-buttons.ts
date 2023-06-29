import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {ContextManager} from "../../../types.js"

export const BoardButtons = view({}, use => ({getBoards, set_active_board}: ContextManager) => {
	return html`
		<div class="board-buttons">
		${getBoards().map(({ name }, i) => html`
			<div class="board-button" ?data-active=${i == 0}>
				<img src="/assets/icon-board.svg"/>
				<button @pointerdown=${() => set_active_board(name)}>
					${name}
				</button>
			</div>`)}
		</div>
	`
})