import {css} from "lit"

export const main_styles = css`

:host {
	background-color: #2B2C37;
}

h1 {
	margin: 1rem;
	color: white;
}

.row {
	display: flex;
	align-items: center;
}

.main-header {
	flex: 80%;
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

.add-new-task-panel, .edit-board-panel {
	display: flex;
	flex-direction: column;
	background-color: #2B2C37;
	padding: 1em;
	border-radius: 6px;
	width: 350px;

	& select {
		background-color: transparent;
		border: 1px solid rgba(130, 143, 163, 0.25);
		border-radius: 4px;
		padding: 0.5em;
		color: white;
		& option {
			background-color: rgb(43, 44, 55);
			color: #828FA3;
		}
	}
	& input[name="board name"], textarea {
	background-color: transparent;
	border-radius: 4px;
	border: 1px solid rgba(130, 143, 163, 0.25);
	padding: 0.5em;
	margin-bottom: 1em;
	}
	& label {
		color: white;
		margin-bottom: 0.2em;
	}
	& h2 {
		margin-bottom: 1em;
		color: white;
	}
}

textarea {
	height: 100px;
}

button {
	border-radius: 20px;
	padding: 0.7em 0em;
	cursor: pointer;
	font-weight: bold;
	border: none;
}

input[data-invalid] {
	border: 1px solid #EA5555;
}


textarea {
	text-align: left;
}
`
