import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import { Actions } from "react-native-router-flux";

//*********************************************************
// Scene components
//*********************************************************
import Home from "trivia-game/src/scenes/Home/Home";
import Quiz from "trivia-game/src/scenes/Quiz/Quiz";
import Results from "trivia-game/src/scenes/Results/Results";

/* Change route action */
export const goToScene = Actions;

//*********************************************************
// Route names
//*********************************************************
export const HOME_SCENE = "home";
export const QUIZ_SCENE = "quiz";
export const RESULTS_SCENE = "results";

//*********************************************************
// Routers
//*********************************************************
/**
 * Note: pan handler set to null will prevent swipe to previous scene.
 */
const Routes = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar={true}>
				<Scene key={HOME_SCENE} component={Home} title={HOME_SCENE} panHandlers={null}/>
				<Scene key={QUIZ_SCENE} component={Quiz} title={QUIZ_SCENE} panHandlers={null}/>
				<Scene key={RESULTS_SCENE} component={Results} title={RESULTS_SCENE} panHandlers={null}/>
			</Stack>
		</Router>
	);
};

export default Routes;