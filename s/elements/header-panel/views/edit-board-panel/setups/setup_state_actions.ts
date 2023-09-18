
import {StateSetter} from "@chasemoskal/magical"

export function setup_state_actions(
	columnNameInputs: string[], setColumnNameInputs: StateSetter<string[]>) {
	return {
		add_column_input: (e: PointerEvent) => {
			e.preventDefault()
			setColumnNameInputs(inputs => [...inputs, ""])
		},
		remove_column_name_input: (i: number) =>
			setColumnNameInputs((inputs) =>
				inputs.slice(0, i).concat(inputs.slice(i + 1))),
		get_columns_inputs: () => columnNameInputs,
		get_board_data: (e: SubmitEvent) => {
			e.preventDefault()
			const formData = new FormData(e.target as HTMLFormElement)
			const boardName = formData.get("board name") as string
			const boardColumnsNames = formData.getAll("board-column-name") as string[]
			return {boardName, boardColumnsNames}
		}
	}
}
