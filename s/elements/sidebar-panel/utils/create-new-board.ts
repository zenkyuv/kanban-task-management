import {Boards} from "../../../types"

export function createNewBoard({setData, newBoardData, data}: {
		setData: ({ boards }: Boards) => void
		newBoardData: {
			boardName: string
			columns: string[]
		}
		data: Boards
	}) {
	setData({
		boards: [...data.boards, {
			name: newBoardData.boardName,
			columns: [...newBoardData.columns.map(columnName => {
				return {
					name: columnName, tasks: undefined
				}
			})]
		}]
	})
}