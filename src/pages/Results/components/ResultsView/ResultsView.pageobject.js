import PageObject from "../../../../../tests/functional/PageObject";

export class ResultsView extends PageObject {

	constructor(parent) {
		super("[data-test='results-view']", parent);
	}

	waitForVisible() {
		this.root.waitForVisible();
	}
}

export default new ResultsView();
