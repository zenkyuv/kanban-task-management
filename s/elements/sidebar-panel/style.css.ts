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
		margin: 1rem;
		color: white;
	}
	.sidebar-header, .all-boards {
		margin-left: 1rem;
	}
	.all-boards {
		margin-bottom: 1em;
	}
	.all-boards {
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
	}
	.board-button[data-active] {
		background-color: #635FC7;
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
		color: white;
	}
	.board-button[data-active] button {
		color: white;
	}
	.board-button[data-active] img {
		filter: brightness(0) invert(1);
		color: white;
	}
	.create-board-btn button, .board-button button {
		font-size: 15px;
		border: none;
		background-color: transparent;
	}
	.create-board-btn button {
		color: #635FC7;
	}
	.toggle-theme {
		display: flex;
		background-color: #20212C;
		border-radius: 6px;
		gap: 1em;
		justify-content: center;
		margin: 1em;
		padding: 0.4em;
		align-items: center;
	}
	.toggle-btn {
		width: 40px;
		height: 20px;
		border-radius: 25px;
		border: none;
		background-color: #635FC7;
		padding: 0.2em;
		cursor: pointer;
	}
	.circle {
		width: 16px;
		height: 16px;
		border-radius: 25px;
		background-color: white;
		position: relative;
		transition: 0.4s;
		left: 0px;
	}
	.circle[data-active] {
		transition: 0.4s;
		left: 20px;
	}
	.hide-sidebar {
		display: flex;
		margin: 0 1em 1em 1em;
		gap: 0.5em;
	}
	.hide-sidebar button {
		border: none;
		background-color: transparent;
		color: #828FA3;
		cursor: pointer;
	}
`