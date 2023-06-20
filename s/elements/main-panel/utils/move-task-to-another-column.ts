import {Boards, Columns, Task} from "../../../types"

export function moveTaskToAnotherColumn(
	e: Event, openedBoard: {
		name: string
		columns: Columns
	} | undefined,
	data: Boards,
	task: Task,
	setData: ({ boards }: Boards) => void
) {
	const statusToSwitchTo = (e.target as HTMLSelectElement).value
	const currentTaskColumn = openedBoard?.columns?.find(taskToFind => taskToFind.tasks?.find(taskTo => taskTo === task))
	const columnToSwitchTo = openedBoard?.columns?.find(({ name }) => name === statusToSwitchTo)
	const taskIndex = currentTaskColumn?.tasks?.indexOf(task)!
	const removedTask = currentTaskColumn?.tasks?.splice(taskIndex, 1)[0]
	if (removedTask) {
		removedTask!.status = statusToSwitchTo
		columnToSwitchTo?.tasks?.push(removedTask!)
		setData({boards: [...data.boards]})
	}
}