import {StateSetter} from "@chasemoskal/magical"

export function setup_state_actions(inputs: string[], setInputs: StateSetter<string[]>) {
	return {
		is_input_valid: (i: number) => {
			if(inputs[i] !== "") {
				return true
			} else false
		},
		add_input: () => setInputs(inputs => [...inputs, ""]),
		remove_input: (i: number) =>
			setInputs((inputs) =>
				inputs.slice(0, i).concat(inputs.slice(i + 1))),
		set_input_value: (i: number, e: InputEvent) =>
			setInputs(inputs => {
				const copy = [...inputs]
				copy[i] = (e.target as HTMLInputElement).value
				return copy
			}),
	}
}
