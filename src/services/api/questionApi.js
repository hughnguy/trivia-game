import * as GLOBAL from "trivia-game/src/globals.js";
import { request } from "trivia-game/src/services/api/api";

export function fetchQuestions(amount, difficulty) {
	return request(GLOBAL.SERVER_URL + "/api.php?amount=" + amount + "&difficulty=" + difficulty + "&type=boolean", {
		method: "GET"
	});
}