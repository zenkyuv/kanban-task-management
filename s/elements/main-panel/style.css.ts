import { css } from "lit";

export const styles = css`
	:host {
		background-color: #20212C;
		display: flex;
		flex: 80%;
		flex-direction: column;
	}
	.columns, .headers, .tasks {
		display: flex;
	}
	.column {
		flex: 1;
		max-width: 280px;
	}
	.column-name {
		margin: 0.5rem 0.5rem 0 0.5rem;
		font-size: 12px;
		color: #828FA3;
	}
	.tasks {
		flex-direction: column;
	}
	.task {
		background-color: #2B2C37;
		margin: 0.5rem;
		padding: 1em;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 0.2em;
	}
	.task h2 {
		font-size: 15px;
		font-weight: 700;
		color: white;
	}
	.task p {
		font-size: 12px;
		font-weight: 700;
		color: #828FA3;
	}
	.task-panel-background {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		background-color: rgb(0 0 0 / 50%);
		left: 0;
		width: 100%;
		height: 100%;
		top: 0;
	}
	.task-panel {
		height: 520px;
		width: 480px;
		background-color: #2B2C37;
		padding: 1em;
	}
	.task-panel h2 {
		color: white;
		font-size: 18px;
	}
	.task-panel p {
		font-size: 13px;
		color: #828FA3;
	}
	.subtasks {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
	.subtask {
		display: flex;
		gap: 1em;
		padding: 0.5rem;
		background-color: #20212C;
		color: white;
		font-size: 12px;
	}
	.subtask[data-checked] label {
		text-decoration-line: line-through;
		opacity: 0.5;
	}
	input[checked] label {
		color: red;
	}
`