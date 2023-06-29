import {ContextState} from "../../../types";

export function setup_context_manager(data: ContextState, publish: () => void) {
	return {
		set_active_board(name: string) {
			data.activeBoardName = name
			publish()
		},
		create_new_board(e: SubmitEvent) {
			e.preventDefault()
			const formData = new FormData(e.target as HTMLFormElement)
			const boardName = formData.get("board-name") as string
			const boardColumnNames = formData.getAll("board-column-name") as string[]
			if (boardName && boardColumnNames) {
				data.boardsData.boards.push({
					name: boardName, columns: [...boardColumnNames.map(columnName => {
						return {
							name: columnName, tasks: undefined
						}
					})]
				})
			}
			publish()
		},
		getBoards() {
			return data.boardsData.boards
		},
		setTheme() {
			if (data.themeMode === "light") {
				data.themeMode = "dark"
			} else data.themeMode = "light"
			publish()
		}
	}
}