import HomeView from "./components/HomeView/HomeView.pageobject";
import QuizView from "../../pages/Quiz/components/QuizView/QuizView.pageobject";

describe("Home", function() {

	context("clicking start button", () => {

		it("goes to the quiz route", function () {
			HomeView.navigate();
			HomeView.waitForVisible();
			HomeView.startGame();
			QuizView.waitForVisible();
		});
	});
});