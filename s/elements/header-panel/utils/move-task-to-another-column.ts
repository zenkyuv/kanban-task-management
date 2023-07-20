import {Boards, Columns, ContextState, Task, TaskPanelProps} from "../../../types"

export function moveTaskToAnotherColumn(
	e: Event,
	{
		activeBoard,
		publish,
		task
	}: TaskPanelProps
) {
	const statusToSwitchTo = (e.target as HTMLSelectElement).value
	const currentTaskColumn = activeBoard?.columns?.find(taskToFind => taskToFind.tasks?.find(taskTo => taskTo === task))
	const columnToSwitchTo = activeBoard?.columns?.find(({ name }) => name === statusToSwitchTo)
	const taskIndex = currentTaskColumn?.tasks?.indexOf(task)!
	const removedTask = currentTaskColumn?.tasks?.splice(taskIndex, 1)[0]
	if (removedTask) {
		removedTask!.status = statusToSwitchTo
		columnToSwitchTo?.tasks?.push(removedTask!)
		publish()
	}
}