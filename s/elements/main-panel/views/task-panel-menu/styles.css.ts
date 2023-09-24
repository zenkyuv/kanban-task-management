import {css} from "@chasemoskal/magical"

export const styles = css`

.menu-items {
	position: absolute;
	right: 1%;
	top: 10%;
	padding: 0.5em;
	border-radius: 8px;
	background: var(--very-dark-grey);
}

p {
	font-size: var(--body-l);
	font-weight: 500;
	cursor: pointer;
	margin: 0.5em;
}

.menu-dots {
	width: 5px;
	height: 20px;
	cursor: pointer;
}

.p-edit {
	color: #828FA3;
	margin-bottom: 0.5em;
}

.p-delete {
	color: var(--red);
}

`
