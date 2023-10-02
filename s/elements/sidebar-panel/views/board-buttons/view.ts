import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"

export const BoardButtons = view({styles: [styles, mainStyles], shadow: true}, use => (
	{actions:{get_boards, set_active_board},
	state: {active_board}}: context
) => {

	return html`
		${get_boards()?.map((board, i) => html`
			<a
				?data-active=${board === active_board}
				@click=${() => set_active_board(board)}>
				<img src="assets/icon-board.svg"/>
				${board.name}
			</a>
		`)}
	`
})
