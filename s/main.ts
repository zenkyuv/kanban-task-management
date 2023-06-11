import data from "./data"
import {Header} from "./elements/header/element.js"
import {registerElements} from "@chasemoskal/magical"

const context = data

registerElements({
	Header: Header.withContext(context)
	}
)