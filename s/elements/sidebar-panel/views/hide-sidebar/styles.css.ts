import { css } from "lit";

export const styles = css`

:host {
	display: flex;
	margin: 0 1em 1em 1em;
	gap: 0.5em;
}

button {
	border: none;
	background-color: transparent;
	color: #828FA3;
	cursor: pointer;
	font-weight: 700;
}


@media only screen and (max-width: 600px) {
	:host {
		display: none;
	}
}

`
