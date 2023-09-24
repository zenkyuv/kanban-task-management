import { css } from "lit";

export const styles = css`

a {
	font-size: var(--heading-m);
	cursor: pointer;
}

div {
	display: flex;
	gap: 0.5em;
	padding: 0.5em 0.5em 0.5em 1em;
	color: var(--medium-grey);
	align-items: center;
}

div[data-active] {
	background: var(--main-purple);
	color: var(--white);
	width: 80%;
	border-radius: 0 20px 20px 0;

	& img {
		filter: brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(710%) hue-rotate(207deg) brightness(119%) contrast(100%);
	}

}


`
