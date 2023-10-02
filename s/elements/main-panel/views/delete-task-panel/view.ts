import {html} from "lit"
import {view} from "@chasemoskal/magical"

import {styles} from "./styles.css.js"
import {context} from "../../../../main.js"
import {mainStyles} from "../../../../main-styles.js"
import {ColumnsState, TaskPanelMenuState} from "../../types.js"

export const DeleteTaskPanel = view({styles: [styles, mainStyles], shadow: true}, use => (
	{actions: {remove_task}}: context,
	{hide_menu_panel}: TaskPanelMenuState,
	{task_data, hide_task_panel}: ColumnsState
) => {

	return html`
	<div @click=${hide_menu_panel} class="panel-background">
			<div class="panel">
				<h2>Delete this task?</h2>
				<p>Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.</p>
				<div class="btn-row">
					<button @click=${(e: PointerEvent) => {
						remove_task(task_data)
						hide_task_panel(e)
						}} class="button-destructive">Delete</button>
					<button @click=${hide_task_panel} class="button-secondary">
						Cancel
					</button>
				</div>
			</div>
		</div>
	`
})
