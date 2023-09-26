import {css} from "lit"

export const styles = css`

:host {
	background-color: #2B2C37;
	justify-content: space-between;
	display: flex;
	flex-direction: column;
}

.column:not([data-open]) {
	animation: close 500ms forwards;
}

.column[data-open] {
	animation: open 500ms forwards;
}

.sidebar-header {
	display: flex;
	margin: 1rem 1rem 2rem 1rem;
	color: white;
}

.all-boards {
	margin-left: 1rem;
	margin-bottom: 1em;
	font-size: 12px;
	color: #828FA3;
}

.eye-open {
	display: none;
}

.eye-open[data-closed] {
	position: absolute;
	display: block;
	bottom: 5%;
	width: 56px;
	height: 48px;
	border: none;
	background: var(--main-purple);
	cursor: pointer;
	border-radius: 0 10px 10px 0;

	&:hover {
		background: var(--main-purple-hover);
	}

}

@keyframes close {
	0%   {
		width: 250px;
	}
	100% {
		width: 0;
		display: none;
		opacity: 0;
	}
}

@keyframes open {
	0% {
		width: 0;
		display: none;
		opacity: 0;
	}
	100%   {
		width: 250px;
		display: block;
		opacity: 1;
	}
}

@media only screen and (max-width: 600px) {
	:host :is(.sidebar-header, .eye-open) {
		display: none;
	}
}

`
