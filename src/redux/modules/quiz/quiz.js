import * as questionApi from "trivia-game/src/services/api/questionApi";
import uniquid from "uniquid";
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();

//*********************************************************
// Actions
//*********************************************************
export const UPDATE_QUIZ = "UPDATE_QUIZ";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const PLAY_AGAIN = "PLAY_AGAIN";

//*********************************************************
// State
//*********************************************************
let initialState = {
	/**
	 * Loading state
	 */
	isLoading: true,

	/**
	 * Current step out of total
	 */
	currentStep: 0,

	/**
	 * Array of questions
	 */
	questions: [],

	/**
	 * Key value map of answer for each question id
	 */
	answers: {},

	/**
	 * If the quiz is finished
	 */
	isComplete: false,

	/**
	 * High score for the game
	 */
	highScore: 0
};

//*********************************************************
// Reducer
//*********************************************************
export default function reducer(state = initialState, action = {}) {
	const actions = {
		[UPDATE_QUIZ]: () => {

			const { results, uniqueIds } = action.payload;

			const questionsWithId = results.map((result, index) => {
				result.id = uniqueIds[index];
				result.question = entities.decode(result.question);
				return result;
			});

			return {
				...state,
				questions: questionsWithId,
				isLoading: false
			};
		},
		[ANSWER_QUESTION]: () => {

			const { answer } = action.payload;

			const currentQuestion = getCurrentQuestion({quiz: state});
			const answers  = state.answers;
			const isLastQuestion = state.currentStep === state.questions.length - 1;
			const nextStep = isLastQuestion ? state.currentStep : state.currentStep + 1;

			return {
				...state,
				answers: {
					...answers,
					[currentQuestion.id]: answer
				},
				currentStep: nextStep,
				isComplete: isLastQuestion
			};
		},
		[PLAY_AGAIN]: () => {

			const oldHighScore = state.highScore;
			const currentScore = getNumberCorrect({quiz: state});
			const newScore = (currentScore > oldHighScore) ? currentScore : oldHighScore;

			return {
				...initialState,
				highScore: newScore
			};
		},
		default: () => {
			return state;
		}
	};
	return (actions[action.type] || actions["default"])();
}

//*********************************************************
// Selectors
//*********************************************************
/**
 * Checks if questions are loaded
 */
export function areQuestionsLoaded({quiz}) {
	return (quiz.questions.length !== 0);
}

/**
 * Returns the current question from step in quiz
 */
export function getCurrentQuestion({quiz}) {
	return quiz.questions[quiz.currentStep];
}

/**
 * Returns total number questions
 */
export function getTotalNumberOfQuestions({quiz}) {
	return quiz.questions.length;
}

/**
 * Returns the number of correctly answered questions
 */
export function getNumberCorrect({quiz}) {

	const { answers, questions } = quiz;
	let numberCorrect = 0;

	questions.map(({id, correct_answer}) => {
		const currentAnswer = answers[id];

		if(currentAnswer === correct_answer) {
			numberCorrect++;
		}
	});

	return numberCorrect;
}

//*********************************************************
// Action Creators
//*********************************************************
/**
 * Populates store with questions for the quiz
 */
export function updateQuiz(results, uniqueIds) {
	return {
		type: UPDATE_QUIZ,
		payload: {
			results: results,
			uniqueIds: uniqueIds
		}
	};
}

/**
 * Fetch questions from the server
 */
export function loadQuestions(amount, difficulty) {
	return (dispatch) => {

		return questionApi.fetchQuestions(amount, difficulty).then(({results}) => {

			const uniqueIds = [];

			results.map(() => uniqueIds.push(uniquid()));

			dispatch(updateQuiz(results, uniqueIds));

			return results;
		});
	};
}

/**
 * Answers the current question
 */
export function answerQuestion(answer) {
	return {
		type: ANSWER_QUESTION,
		payload: {
			answer: answer
		}
	};
}

/**
 * Bring app back to initial state
 */
export function playAgain() {
	return {
		type: PLAY_AGAIN
	};
}
