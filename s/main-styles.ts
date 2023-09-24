import {css} from "lit"

export const mainStyles = css`

* {
	font-family: Plus Jakarta Sans;
	box-sizing: border-box;
}

input, textarea {
	font-weight: 500;
}

.panel {
	position: relative;
	width: 20em;
	display: flex;
	flex-direction: column;
	padding: 1.3em;
	background: var(--dark-grey);
	border-radius: 6px;
}

.panel-background {
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

input:not([type="checkbox"]), textarea, select {
	padding: 0.5em;
	background: transparent;
	border-radius: 4px;
	border: 1px solid rgba(130, 143, 163, 0.25);
	padding: 0.9em;
	color: var(--white);
	&:focus {
		outline: 1px solid var(--white);
	}
	&::placeholder {
		font-family: Plus Jakarta Sans;
		color: rgba(130, 143, 163, 0.25);
	}
}

.editable-inputs {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}

.inputs-container {
	display: flex;
	align-items: center;
	gap: 0.5em;
	& input {
		flex: 1;
	}
	& img {
		cursor: pointer;
	}
}

.button-primary-l {
	font-size: var(--heading-m);
	border-radius: 24px;
	background: var(--main-purple);
	color: var(--white);
	padding: 1em;
	border: none;
	cursor: pointer;
	font-weight: 700;
	&:hover {
		background: var(--main-purple-hover);
	}
}

.button-primary-s {
	border-radius: 20px;
	padding: 1em;
	color: var(--white);
	font-size: var(--body-l);
	background: var(--main-purple);
	border: none;
	cursor: pointer;
	font-weight: 700;
	&:hover {
		background: var(--main-purple-hover);
	}
}

.button-secondary {
	font-size: var(--body-l);
	border-radius: 20px;
	padding: 1em;
	background: var(--white);
	color: var(--main-purple);
	border: none;
	cursor: pointer;
	font-weight: 700;
	&:hover {
		background: rgba(99, 95, 199, 0.25);
	}
}

.button-destructive {
	font-size: var(--body-l);
	padding: 1em;
	border-radius: 20px;
	background: var(--red);
	color: var(--white);
	border: none;
	cursor: pointer;
	font-weight: 700;
	&:hover {
		background: var(--red-hover);
	}
}

h1 {
	font-size: var(--heading-xl);
}

h2 {
	font-size: var(--heading-l);
}

h3 {
	font-size: var(--heading-m);
}

h4 {
	font-size: var(--heading-s);
}

label {
	font-size: var(--body-s);
	font-weight: 700;
	color: white;
}

a {
	font-weight: 700;
	font-size: var(--heading-m);
	cursor: pointer;
}

`
