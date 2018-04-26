import HomeView from "../../pages/Home/components/HomeView/HomeView.pageobject";
import QuizView from "../../pages/Quiz/components/QuizView/QuizView.pageobject";
import ResultsView from "../../pages/Results/components/ResultsView/ResultsView.pageobject";

describe("Quiz", function() {

	beforeEach(function() {
		goToQuiz();
	});

	function goToQuiz() {
		HomeView.navigate();
		HomeView.root.waitForVisible();
		HomeView.startGame();
		QuizView.root.waitForVisible();
	}

	context("finishing the game", () => {

		it("goes to the results screen", function () {

			for(let i = 0; i < 10; i++) {
				QuizView.answerTrue();
			}

			ResultsView.root.waitForVisible();
		});
	});
});