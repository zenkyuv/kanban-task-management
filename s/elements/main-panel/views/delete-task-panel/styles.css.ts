
import {css} from "@chasemoskal/magical"

export const styles = css`

.delete-task-panel {
	display: flex;
	flex-direction: column;
	background-color: #2B2C37;
	z-index: 1;
	padding: 1em;
	border-radius: 6px;

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

`
