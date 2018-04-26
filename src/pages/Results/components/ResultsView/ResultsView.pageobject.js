import PageObject from "../../../../../tests/functional/PageObject";

export class ResultsView extends PageObject {

	constructor(parent) {
		super("[data-test='results-view']", parent);
	}
}

export default new ResultsView();
