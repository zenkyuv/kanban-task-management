import { StateSetter } from "@chasemoskal/magical";

export function setup_edit_board_panel_actions(
	columnNameInputs: string[],
		setColumnNameInputs: StateSetter<string[]>) {
	return {
				add_column_input: (e: PointerEvent) => {
				e.preventDefault()
				setColumnNameInputs(inputs => [...inputs, ""])
			},
			remove_column_name_input: (i: number) =>
				setColumnNameInputs((inputs) =>
					inputs.slice(0, i).concat(inputs.slice(i + 1))),
			get_columns_inputs: () => columnNameInputs
			}
}