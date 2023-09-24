import {StateSetter} from "@chasemoskal/magical"

export function setup_state_manager(
	setInputs: StateSetter<string[]>,
	inputs: string[],
	setPanelOpen: StateSetter<boolean>
) {
	return {
		remove_input: (i: number) =>
			setInputs((inputs) =>
				inputs.slice(0, i).concat(inputs.slice(i + 1))),
		set_input_value: (i: number, e: InputEvent) =>
			setInputs(inputs => {
				const copy = [...inputs]
				copy[i] = (e.target as HTMLInputElement).value
				return copy
			}),
		hide_create_board_panel: (e: PointerEvent) => {
			if ((e.target as HTMLElement).className === "panel-background")
				setPanelOpen(false)
		},
		add_input: () => setInputs(inputs => [...inputs, ""]),
		get_inputs: () => inputs,
		get_board_data: (e: SubmitEvent) => {
			e.preventDefault()
			const formData = new FormData(e.target as HTMLFormElement)
			const boardName = formData.get("board name") as string
			const boardColumnsNames = formData.getAll("board-column-name") as string[]
			return {boardName, boardColumnsNames}
		}
	}
}
