import PageObject from "../../../../../tests/functional/PageObject";
import { AnswerButtons } from "./components/AnswerButtons/AnswerButtons.pageobject.js";

export class QuizView extends PageObject {

	constructor(parent) {
		super("[data-test='quiz-view']", parent);
	}

	get answerButtons() {
		return new AnswerButtons(this);
	}

	answerTrue() {
		this.answerButtons.clickTrue();
	}

	answerFalse() {
		this.answerButtons.clickFalse();
	}
}

export default new QuizView();
