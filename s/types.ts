import { Snapstate } from "@chasemoskal/snapstate"

import data from "./data"
import {actions} from "./main"

export interface Data {
	state: Snapstate<{
		data: typeof data
		openedBoard: string
		themeMode: string
	}>
	actions: typeof actions
}