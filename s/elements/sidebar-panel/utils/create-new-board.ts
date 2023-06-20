import {Boards} from "../../../types"

export function createNewBoard({setData, newBoardData}: {
		setData: ({ boards }: Boards) => void
		newBoardData: {
			boardName: string
			columns: string[]
		}
	}) {
	setData({
		boards: [{
			name: newBoardData.boardName,
			columns: [...newBoardData.columns.map(columnName => {
				return {
					name: columnName, tasks: undefined
				}
			})]
		}]
	})
}