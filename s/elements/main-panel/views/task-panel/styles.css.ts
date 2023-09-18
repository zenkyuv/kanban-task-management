
import {css} from "@chasemoskal/magical";

export const styles = css`

.task-panel {
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 480px;
	background-color: #2B2C37;
	padding: 1.3em;
	position: relative;

	& h2 {
		color: white;
		font-size: 18px;
	}

}

.subtasks {
	display: flex;
	flex-direction: column;
	gap: 0.5em;

	& p {
		color: white;
		font-weight: bold;
		font-size: 12px;
	}

}

.subtask {
	display: flex;
	gap: 1em;
	padding: 0.5rem;
	background-color: #20212C;
	color: white;
	font-size: 12px;
	border-radius: 4px;
	margin-left: 0.5em;
	align-items: center;

	[data-checked] label {
		text-decoration-line: line-through;
		opacity: 0.5;
	}

}

.current-status-box {
	display: flex;
	flex-direction: column;
	gap: 0.3em;

	select {
		background-color: transparent;
		color: white;
		padding: 0.5em;
		border-radius: 5px;
		border: 1px solid rgb(130 143 163 / 25%);

		option {
			background-color: rgb(43, 44, 55);
			color: white;
		}

	}

}

.current-status {
	color: white;
	font-size: 12px;
	font-weight: bold;
}

.description {
	font-size: 13px;
	color: #828FA3;
}

.flex-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.panel-background {
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

`
