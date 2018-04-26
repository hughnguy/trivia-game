import PageObject from "../../../tests/functional/PageObject";

export class Button extends PageObject {

	constructor(parent) {
		super("[data-test='button']", parent);
	}

	click() {
		this.root.waitForVisible();
		this.root.click();
	}
}

export default new Button();
