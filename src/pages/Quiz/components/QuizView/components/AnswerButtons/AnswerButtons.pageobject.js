import PageObject from "../../../../../../../tests/functional/PageObject";

export class AnswerButtons extends PageObject {

	constructor(parent) {
		super("[data-test='answer-buttons']", parent);
	}

	get trueButton() {
		return browser.element(this.rootSelector + " [data-test='true-button']");
	}

	get falseButton() {
		return browser.element(this.rootSelector + " [data-test='false-button']");
	}

	clickTrue() {
		this.trueButton.waitForVisible();
		this.trueButton.click();
	}

	clickFalse() {
		this.falseButton.waitForVisible();
		this.falseButton.click();
	}
}

export default new AnswerButtons();
