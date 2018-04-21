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
// Page components
//*********************************************************
import Home from "trivia-game/src/pages/Home/Home";
import Quiz from "trivia-game/src/pages/Quiz/Quiz";
import Results from "trivia-game/src/pages/Results/Results";

//*********************************************************
// Route names
//*********************************************************
export const HOME_ROUTE = "/";
export const QUIZ_ROUTE = "/quiz";
export const RESULTS_ROUTE = "/results";

//*********************************************************
// Routers
//*********************************************************
const Routes = () => {
    return (
        <Router>
            <RouteView>
                <Route exact path={HOME_ROUTE} component={Home}/>
                <Route path={QUIZ_ROUTE} component={Quiz}/>
                <Route path={RESULTS_ROUTE} component={Results}/>
            </RouteView>
        </Router>
    );
};

export default Routes;