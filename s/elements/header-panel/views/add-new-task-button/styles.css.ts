import {css} from "lit"

export const styles = css`

.button-primary-l img {
	display: none;
}

@media only screen and (max-width: 600px) {
	.button-primary-l {
		min-width: auto;
		& span {
			display: none;
		}
		& img {
			display: block;
		}
	}
}

`
