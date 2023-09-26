import {css} from "lit"

export const styles = css`

h2 {
	font-size: var(--heading-l);
	color: var(--white);
}

.panel {
	gap: 0.3em;
}

label {
	font-size: var(--body-s);
}

select {
	color: var(--white);
	cursor: pointer;

	option {
		background-color: rgb(43, 44, 55);
		color: white;
	}

}

`
