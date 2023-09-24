import {css} from "@chasemoskal/magical"

export const styles = css`

.task {
	background-color: #2B2C37;
	margin-bottom: 0.5rem;
	padding: 1em;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 0.2em;
	cursor: pointer;
}

.tasks {
	flex-direction: column;
	height: 100%;
	margin-left: 1rem;
}

.tasks[data-notasks] {
	background-color: rgb(43 44 55 / 25%);
	border-radius: 5px;
}

h3 {
	color: var(--white);
}

.task p {
	font-size: 12px;
	font-weight: 700;
	color: #828FA3;
}

.columns {
	display: flex;
	height: 100%;
}

.column {
	flex: 1;
	max-width: 280px;
}

.column-name {
	margin: 0.5rem 1rem;
	font-size: 12px;
	color: #828FA3;
}
`
