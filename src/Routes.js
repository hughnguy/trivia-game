import React from "react";
import { View, Dimensions } from "react-native";
import styled from "styled-components";
import Routing, { Router } from "trivia-game/src/router";
const { Route } = Routing;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

//*********************************************************
// Styles
//*********************************************************
const RouteView = styled.View`
	width: ${deviceWidth};
	height: ${deviceHeight};
`;

//*********************************************************
// Scene components
//*********************************************************
import Home from "trivia-game/src/scenes/Home/Home";
import Quiz from "trivia-game/src/scenes/Quiz/Quiz";
import Results from "trivia-game/src/scenes/Results/Results";

//*********************************************************
// Route names
//*********************************************************
export const HOME_SCENE = "/";
export const QUIZ_SCENE = "/quiz";
export const RESULTS_SCENE = "/results";

//*********************************************************
// Routers
//*********************************************************
const Routes = () => {
	return (
		<Router>
			<RouteView>
                <Route exact path={HOME_SCENE} component={Home}/>
                <Route path={QUIZ_SCENE} component={Quiz}/>
                <Route path={RESULTS_SCENE} component={Results}/>
            </RouteView>
        </Router>
	);
};

export default Routes;