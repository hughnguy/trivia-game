import PageObject from "../../../tests/functional/PageObject";

export class Title extends PageObject {

	constructor(parent) {
		super("[data-test='title']", parent);
	}
}

export default new Title();
