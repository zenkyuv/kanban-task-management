import {css} from "lit";

export const styles = css`

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

.sidebar-header {
	flex: 20%;
}

.main-header {
	flex: 80%;
}

.menu-dots {
	padding: 1.2em;
}

.menu-items {
	position: absolute;
	right: 1%;
	top: 10%;
	padding: 0.8em;
	border-radius: 8px;
	background-color: #20212C;
}

.add-new-task-btn {
	background-color: #635FC7;
	border: none;
	color: white;
	height: 40px;
	width: 150px;
}

.p-delete, .h2-delete {
	color: #EA5555;
}

.p-edit {
	color: #828FA3;
	margin-bottom: 0.5em;
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

.add-new-task-panel, .edit-board-panel, .delete-board-panel {
	display: flex;
	flex-direction: column;
	background-color: #2B2C37;
	padding: 1em;
	border-radius: 6px;
}

.delete-board-panel, .add-new-task-panel, .edit-board-panel {
	width: 350px;
}

.add-new-task-panel, .edit-board-panel {
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
	& input, textarea {
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

.add-subtask-btn, .add-column-btn {
		background-color: white;
		color: #635FC7;
		width: 100%;
		margin-bottom: 1em;
}

.create-task-btn {
	margin: 1em 0;
}

.create-task-btn, .save-changes-btn {
	background-color: #635FC7;
	color: white;
}

.flex-row {
	display: flex;
	margin-bottom: 0.5em;
	 & input {
		margin-bottom: 0;
		flex: 1;
	 }
	 & img {
		padding: 0.5em;
	 }
}

.delete-board-panel {
	& p {
		margin: 1em 0;
		color: #828FA3;
	}
}

.btn-row {
	display: flex;
	gap: 0.5em;
	& button {
		flex: 1;
	}
	& .btn-delete {
		background-color: #EA5555;
		color: white;
	}
	& .btn-cancel {
		color: #635FC7;
		background-color: white;
	}
}

input[data-invalid] {
	border: 1px solid #EA5555;
}

.subtask {
	& input {width: 100%;}
	position: relative;
	display: flex;
	align-items: center;
}

.err-box {
	position: relative;
	display: flex;
	align-items: center;
	& input {
		margin-bottom: 0;
		width: 100%;
	}
	& .err-msg {
		right: 15px;
	}
	margin-bottom: 1em;
}

.err-msg {
	position: absolute;
	color: #EA5555;
	right: 45px;
	font-size: 12px;
}

textarea {
	text-align: left;
}
`
