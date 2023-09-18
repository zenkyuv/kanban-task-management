import {css} from "@chasemoskal/magical"

export const styles = css`

.menu-items {
	position: absolute;
	right: 1%;
	top: 10%;
	padding: 0.8em;
	border-radius: 8px;
	background-color: #20212C;

	& p {
		cursor: pointer;
	}

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

.menu-background {
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
