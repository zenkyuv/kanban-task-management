import {css} from "lit"

export const styles = css`

:host {
	background-color: #20212C;
	display: flex;
	flex: 80%;
	flex-direction: column;
	overflow-x: scroll;
}

.columns, .headers, .tasks {
	display: flex;
}

.column-name {
	margin: 0.5rem 1rem;
	font-size: 12px;
	color: #828FA3;
}

input[checked] label {
	color: red;
}

input[type="checkbox"] {
	accent-color: #635FC7;
}



`
