
import {css} from "@chasemoskal/magical"

export const styles = css`

.panel {
	gap: 1em;
}

h2 {
	font-size: var(--heading-l);
	color: var(--white);
}

.subtasks {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}

p {
	font-size: var(--body-s);
	font-weight: 700;
	color: var(--white);
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
}

.subtask[data-checked] label {
	text-decoration-line: line-through;
	opacity: 0.5;
}

.current-status-box {
	display: flex;
	flex-direction: column;
	gap: 0.3em;

	select {
		color: var(--white);
		cursor: pointer;

		option {
			background-color: rgb(43, 44, 55);
			color: white;
		}

	}

}

.description {
	font-size: var(--body-l);
	color: var(--medium-grey);
}

.flex-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

`
