import {css} from "lit"

export const styles = css`

.panel {
	gap: 0.3em;
}

button {
	width: 100%;
}

h2 {
	font-size: var(--heading-l);
	color: var(--white);
}

label {
	font-size: var(--heading-m);
	color: var(--white);
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

`
