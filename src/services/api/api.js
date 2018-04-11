import * as GLOBAL from "trivia-game/src/globals";

export function request(url, requestInfo) {

	/* Send http request */
	return fetch(url, requestInfo).then(response => {

		return response.text().then(data => {

			/* Check valid json */
			try {
				data = JSON.parse(data);

			} catch(err) {

				throw "Unable to parse json response";
			}
			return data;
		});
	});
}