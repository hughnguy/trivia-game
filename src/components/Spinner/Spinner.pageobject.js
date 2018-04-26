import PageObject from "../../../tests/functional/PageObject";

export class Spinner extends PageObject {

	constructor(parent) {
		super("[data-test='spinner']", parent);
	}
}

export default new Spinner();
