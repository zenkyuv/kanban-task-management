import {css} from "lit"

export const styles = css`

:host {
	flex: 1;
}

h1 {
	margin: 1rem;
	color: white;
	font-size: var(--heading-xl);
}

sidebar-panel {
	display: none;
}

.main-header {
	display: flex;
	align-items: center;
	margin-left: 1em;
	pointer-events: none;

	& h1 {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	& img {
		display: none;
	}
}

@media only screen and (max-width: 600px) {
	.main-header {
		pointer-events: all;
		& img {
			display: block;
		}
	}
	sidebar-panel {
		position: absolute;
		display: flex;
	}
}

`
