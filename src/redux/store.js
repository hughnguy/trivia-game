import {
	createStore,
	applyMiddleware,
	combineReducers
} from "redux";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//*********************************************************
// Reducers
//*********************************************************
import quiz from "trivia-game/src/redux/modules/quiz";

//*********************************************************
// Root reducer
//*********************************************************
const rootReducer = combineReducers({
	quiz
});

//*********************************************************
// Local persist settings
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
    applyMiddleware(thunk)
);

//*********************************************************
// Export
//*********************************************************
export const persistor = persistStore(store);
export default store;
