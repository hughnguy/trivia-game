import * as GLOBAL from "trivia-game/src/globals.js";
import deepFreeze from "deep-freeze-strict";
import quizReducer from "trivia-game/src/redux/modules/quiz/quiz";
import * as Actions from "trivia-game/src/redux/modules/quiz/quiz";
import quizMock from "trivia-game/tests/unit/mocks/quizMock";
import * as questionApi from "trivia-game/src/services/api/questionApi";

describe("quiz reducer", function() {

	let sandbox;
	let initialState;

	before(function() {
		initialState = quizReducer(undefined, undefined);
		deepFreeze(initialState);
	});

	beforeEach(function() {
		sandbox = sinon.sandbox.create();
	});

	afterEach(function() {
		sandbox.restore();
	});

	it("#test updateQuiz", function () {

		let newState;
		try {
			newState = quizReducer(initialState, Actions.updateQuiz(quizMock.results, [1,2,3,4,5,6,7,8,9,10]));
		} catch (e) {
			assert.fail("state should not have mutated");
		}

		assert.equal(newState.isLoading, false);
		assert.equal(newState.currentStep, 0);
		assert.equal(newState.questions.length, quizMock.results.length);
		assert.deepEqual(newState.answers, {});
		assert.equal(newState.isComplete, false);
		assert.equal(newState.highScore, 0);
	});

	it("#test loadQuestions", function () {

		/* Mock api response */
		const fetchQuestionsPromise = Promise.resolve(quizMock);
		sandbox.stub(questionApi, "fetchQuestions", () => {
			return fetchQuestionsPromise;
		});

		/* Spy dispatch function */
		const dispatchSpy = sandbox.spy();
		Actions.loadQuestions(GLOBAL.NUMBER_QUESTIONS, GLOBAL.DIFFICULTY)(dispatchSpy);

		fetchQuestionsPromise.then(() => {
			assert.equal(dispatchSpy.callCount, 1, "dispatch should have been called");
			assert.deepEqual(dispatchSpy.args[0][0], Actions.updateQuiz(quizMock.results, [1,2,3,4,5,6,7,8,9,10]), "updateQuiz should have been called with arguments");
		});
	});

	it("#test answerQuestion", function () {

		let newState;
		const answer = "True";

		try {
			newState = quizReducer(initialState, Actions.updateQuiz(quizMock.results, [1,2,3,4,5,6,7,8,9,10]));
			newState = quizReducer(newState, Actions.answerQuestion(answer));
		} catch (e) {
			assert.fail("state should not have mutated");
		}

		assert.equal(newState.isLoading, false);
		assert.equal(newState.currentStep, 1);
		assert.equal(newState.questions.length, quizMock.results.length);

		const questionId = newState.questions[0].id;
		assert.deepEqual(newState.answers, {
			[questionId]: answer
		});

		assert.equal(newState.isComplete, false);
		assert.equal(newState.highScore, 0);
	});

	it("#test answerQuestion until end of game", function () {

		let newState;
		const answer = "True";

		try {
			newState = quizReducer(initialState, Actions.updateQuiz(quizMock.results, [1,2,3,4,5,6,7,8,9,10]));

			/* Answer questions until end of game */
			for(let i = 0; i < quizMock.results.length; i++) {
				newState = quizReducer(newState, Actions.answerQuestion(answer));
			}

		} catch (e) {
			assert.fail("state should not have mutated");
		}

		assert.equal(newState.isLoading, false);
		assert.equal(newState.currentStep, 9);
		assert.equal(newState.questions.length, quizMock.results.length);

		/* Check all questions answered */
		for(let i = 0; i < quizMock.results.length; i++) {
			const questionId = newState.questions[i].id;
			assert.deepEqual(newState.answers[questionId], answer);
		}

		assert.equal(newState.isComplete, true);
	});
});