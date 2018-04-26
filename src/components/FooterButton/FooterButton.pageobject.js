import PageObject from "../../../tests/functional/PageObject";
import { Button } from "../Button/Button.pageobject";

export class FooterButton extends PageObject {

	constructor(parent) {
		super("[data-test='footer-button']", parent);
	}

	get button() {
		return new Button(this);
	}

	click() {
		this.button.click();
	}
}

export default new FooterButton();
