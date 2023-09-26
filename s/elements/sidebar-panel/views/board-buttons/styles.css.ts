import { css } from "lit";

export const styles = css`

a {
	display: flex;
	gap: 0.5em;
	padding: 1em;
	width: 80%;
	color: var(--medium-grey);
	align-items: center;
	font-size: var(--heading-m);
	cursor: pointer;
}

a[data-active] {
	background: var(--main-purple);
	color: var(--white);
	border-radius: 0 20px 20px 0;

	& img {
		filter: brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(710%) hue-rotate(207deg) brightness(119%) contrast(100%);
	}

}

a:not([data-active]):hover {
	background: var(--white);
	color: var(--main-purple);
	width: 80%;
	border-radius: 0 20px 20px 0;

	& img {
		filter: brightness(0) saturate(100%) invert(40%) sepia(12%) saturate(3707%) hue-rotate(207deg) brightness(93%) contrast(83%);
	}

}

`
