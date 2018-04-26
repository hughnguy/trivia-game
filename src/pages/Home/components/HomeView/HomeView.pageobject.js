import PageObject from "../../../../../tests/functional/PageObject";
import { FooterButton } from "../../../../components/FooterButton/FooterButton.pageobject";

export class HomeView extends PageObject {

	constructor(parent) {
		super("[data-test='home-view']", parent);
	}

	get footerButton() {
		return new FooterButton(this);
	}

	navigate() {
		browser.url("/");
	}

	startGame() {
		this.footerButton.click();
	}

	waitForVisible() {
		this.root.waitForVisible();
	}
}

export default new HomeView();
