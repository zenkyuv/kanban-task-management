import { css } from "lit";

export const styles = css`

:host {
	display: flex;
	padding: 0.5em 0.5em 0.5em 1em;
	gap: 0.5em;
	align-items: center;

}

a {
	color: var(--main-purple);
}

img {
	filter: brightness(0) saturate(100%) invert(40%) sepia(12%) saturate(3707%) hue-rotate(207deg) brightness(93%) contrast(83%);
}

h2 {
	color: var(--white);
}

.panel {
	gap: 0.3em;
}

.buttons {
	display: flex;
	flex-direction: column;
}

`
