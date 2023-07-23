import {Pipe, apply_theme, provide_context, register_to_dom} from "@benev/frog"

import {context} from "../main.js"
import {themeMode} from "../style.js"
import {get_elements} from "./get_elements.js"

export function prepare_components(context: context) {
	const elements = get_elements()
	Pipe.with(elements)
	.to(provide_context(context))
	.to(apply_theme(themeMode))
	.to(register_to_dom)
	.done()
}