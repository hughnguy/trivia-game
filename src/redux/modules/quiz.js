import * as questionApi from "trivia-game/src/services/api/questionApi";

//*********************************************************
// Actions
//*********************************************************
export const UPDATE_QUIZ = "UPDATE_QUIZ";

//*********************************************************
// State
//*********************************************************
let initialState = {
	questions: []
};

//*********************************************************
// Reducer
//*********************************************************
export default function reducer(state = initialState, action = {}) {
	const actions = {
		[UPDATE_QUIZ]: () => {
			const { results } = action.payload;

			return {
				questions: results
			};
		},
		default: () => {
			return state;
		}
	};
	return (actions[action.type] || actions["default"])();
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
