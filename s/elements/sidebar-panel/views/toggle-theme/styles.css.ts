import { css } from "lit";

export const styles = css`

:host {
	display: flex;
	background-color: #20212C;
	border-radius: 6px;
	gap: 1em;
	justify-content: center;
	margin: 1em;
	padding: 0.4em;
	align-items: center;
}

button {
	width: 40px;
	height: 20px;
	border-radius: 25px;
	border: none;
	background-color: #635FC7;
	padding: 0.2em;
	cursor: pointer;
	display: flex;
	align-items: center;
}

.circle {
	width: 16px;
	height: 16px;
	border-radius: 25px;
	background-color: white;
	position: relative;
	transition: 0.4s;
	left: 0px;
}

.circle[data-active] {
	transition: 0.4s;
	left: 20px;
}

`
