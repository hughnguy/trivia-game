import * as questionApi from "trivia-game/src/services/api/questionApi";
import uniquid from "uniquid";

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
	isComplete: false
};

//*********************************************************
// Reducer
//*********************************************************
export default function reducer(state = initialState, action = {}) {
	const actions = {
		[UPDATE_QUIZ]: () => {

			const { results } = action.payload;

			const questionsWithId = results.map((result) => {
				result.id = uniquid();
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
			const currentQuestion = state.questions[state.currentStep];
			const answers  = state.answers;
			const isLastQuestion = state.currentStep === state.questions.length - 1;

			let nextStep;
			if(isLastQuestion) {
				nextStep = state.currentStep;
			} else {
				nextStep = state.currentStep + 1;
			}

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

			return initialState;
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
function updateQuiz(results) {
	return {
		type: UPDATE_QUIZ,
		payload: {
			results: results
		}
	};
}

/**
 * Fetch questions from the server
 */
export function loadQuestions(amount, difficulty) {
	return (dispatch) => {

		return questionApi.fetchQuestions(amount, difficulty).then(({results}) => {

			dispatch(updateQuiz(results));

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
