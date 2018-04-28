import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose
} from "redux";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//*********************************************************
// Dev tools
//*********************************************************
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//*********************************************************
// Reducers
//*********************************************************
import quiz from "trivia-game/src/redux/modules/quiz/quiz";

//*********************************************************
// Root reducer
//*********************************************************
const rootReducer = combineReducers({
	quiz: quiz
});

//*********************************************************
// Persist store settings
//*********************************************************
export const rootPersistConfig = {
	key: "root",
	storage: storage,
	stateReconciler: autoMergeLevel2
};

//*********************************************************
// Store creation
//*********************************************************
const store = createStore(
	persistReducer(rootPersistConfig, rootReducer),
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

//*********************************************************
// Export
//*********************************************************
export const persistor = persistStore(store);
export default store;
