import { css } from "lit";

export const themeMode = css`
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: Plus Jakarta Sans;
		}
	p, label, textarea, input, span, button {
		font-weight: bold;
	}
	h1 {
		font-size: 24px;
	}
	h2 {
		font-size: 18px;
	}
	p, button, option {
		font-size: 13px;
	}
	label {
		font-size: 12px;
	}
	p, textarea, input {color: white;}
`