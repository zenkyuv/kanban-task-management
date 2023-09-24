import { css } from "lit";

export const styles = css`
	:host {
		background-color: #2B2C37;
		flex: 15%;
		justify-content: space-between;
	}
	.column {
		display: flex;
		flex-direction: column;
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
	.board-buttons, :host {
		display: flex;
		flex-direction: column;
	}
	.board-buttons {
		margin-right: 1em;
	}
	.board-button, .create-board-btn {
		display: flex;
		align-items: center;
		padding: 0.6em 0.6em 0.6em 1em;
		gap: 0.5em;
	}
	.board-button img, .create-board-btn img {
		width: 20px;
		height: 20px;
	}
	.board-button button {
		color: #828FA3;
		cursor: pointer;
	}
	.board-button[data-active] {
		background-color: #635FC7;
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
		color: white;
		& button {color: white;}
		& img {
			filter: brightness(0) invert(1);
			color: white;
		}
	}
`
