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
	.create-board-btn button, .board-button button {
		font-size: 15px;
		border: none;
		background-color: transparent;
	}
	.create-board-btn button {
		color: #635FC7;
		cursor: pointer;
	}
	.add-board-panel-background {
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
	.add-board-panel {
		width: 480px;
		background-color: #2B2C37;
		padding: 1em;
		display: flex;
		flex-direction: column;
		gap: 0.3em;
	}
	.add-board-panel {
		& h2, label {
			color: white;
			font-size: 18px;
		}
		& h2 {
			margin-bottom: 1em;
			font-size: 23px;
		}
		& label {
			margin-bottom: 0.3em;
			font-size: 15px;
		}
	}
	.board-name {
		margin-bottom: 1em;
		padding: 0.5em;
		border: 1px solid rgb(130 143 163 / 25%);
		border-radius: 4px;
		background-color: transparent;
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
	.new-column {
		display: flex;
		margin-bottom: 0.3em;
		color: white;
		& input {
			flex: 1;
			padding: 0.5em;
			background-color: transparent;
			border: 1px solid rgb(130 143 163 / 25%);
			border-radius: 4px;
			color: white;
		}
		& img {
			padding: 0.5em;
		}
	}
	.add-column-btn {
		padding: 1em;
		border-radius: 20px;
		background-color: white;
		color: #635FC7;
		border: none;
	}
	.create-new-board-btn {
		background-color: #635FC7;
		color: white;
		padding: 1em;
		border-radius: 20px;
		border: none;
	}
	.buttons {
		margin-top: 0.5em;
		display: flex;
		flex-direction: column;
		gap: 0.7em;
	}
`