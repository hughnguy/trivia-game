import {
	createStore,
	applyMiddleware,
	combineReducers
} from "redux";
import thunk from "redux-thunk";

//*********************************************************
// Reducers
//*********************************************************
import quiz from "trivia-game/src/redux/modules/quiz";

//*********************************************************
// Middleware
//*********************************************************
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

//*********************************************************
// Root reducer
//*********************************************************
const reducer = combineReducers({
	quiz
});

const store = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default store;