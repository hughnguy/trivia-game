export default class PageObject {

	/**
	 * Prepends parent selector if component has parent
	 * @param rootSelector
	 * @param parent
	 */
	constructor(rootSelector, parent) {
		this.rootSelector = rootSelector;

		if(parent) {
			this.rootSelector = parent.rootSelector + " " + this.rootSelector;
		}
	}

	/**
	 * Obtains the root component that was instantiated
	 * @returns {*}
	 */
	get root() {
		return browser.element(this.rootSelector);
	}
}