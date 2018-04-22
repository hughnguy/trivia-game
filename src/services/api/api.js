export async function request(url, requestInfo) {

	/* Send http request */
	let response;
	try {
		response = await fetch(url, requestInfo);
	} catch(err) {
		throw "Request failed: " + JSON.stringify(err);
	}

	/* Get response */
	let data;
	try {
		data = await response.text();
	} catch(err) {
		throw "Failed to retrieve text: " + JSON.stringify(err);
	}

	/* Check valid json */
	try {
		data = JSON.parse(data);
	} catch(err) {
		throw "Unable to parse json response";
	}

	return data;
}