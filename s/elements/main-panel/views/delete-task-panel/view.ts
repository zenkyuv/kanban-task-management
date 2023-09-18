import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {ColumnsState, TaskPanelMenuState} from "../../types.js"

export const DeleteTaskPanel = view({styles, shadow: true}, use => (
	{actions: {remove_task}}: context,
	{hide_menu_panel}: TaskPanelMenuState,
	{task_data, hide_task_panel}: ColumnsState
) => {

	return html`
	<div @pointerdown=${hide_menu_panel} class="menu-background">
			<div class="delete-task-panel">
				<h2 class="h2-delete">Delete this task?</h2>
				<p>Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.</p>
				<div class="btn-row">
					<button @pointerdown=${(e: PointerEvent) => {
						remove_task(task_data)
						hide_task_panel(e)
						}} class="btn-delete">Delete</button>
					<button @pointerdown=${(e: PointerEvent) => e.preventDefault()} class="btn-cancel">
						Cancel
					</button>
				</div>
			</div>
		</div>
	`
})
