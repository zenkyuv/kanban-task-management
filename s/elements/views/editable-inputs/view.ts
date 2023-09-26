import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {mainStyles} from "../../../main-styles.js"
import {setup_state_actions} from "./setups/setup_state_actions.js"


export const EditableInputs = view({shadow: false, styles: mainStyles}, use => (
	input_items: string[],
	input_name: string,
	button_text: string
) => {

	const [inputs, setInputs] = use.state(input_items)
	const actions = setup_state_actions(inputs, setInputs)

	return html`
		<div slot="cos" part="cos" class=editable-inputs>
			${inputs.map((value, i) => html`
				<div class="inputs-container">
					<input
						required
						value="${value}"
						.value="${value}"
						name=${input_name}
						@input=${(e: InputEvent) => actions.set_input_value(i, e)}
					>
					<img
						@pointerdown=${() => actions.remove_input(i)}
						src="/assets/icon-cross.svg"/>
				</div>
			`)}
			<button type="button" @pointerdown=${actions.add_input} class="button-secondary">
				${button_text}
			</button>
		</div>
	`
})

