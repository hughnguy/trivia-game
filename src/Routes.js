import React from "react";
import Routing, { Router } from "trivia-game/src/router";
const { Route, Switch } = Routing;

//*********************************************************
// Page components
//*********************************************************
import Home from "trivia-game/src/pages/Home";
import Quiz from "trivia-game/src/pages/Quiz";
import Results from "trivia-game/src/pages/Results";

//*********************************************************
// Route names
//*********************************************************
export const HOME_ROUTE = "/";
export const QUIZ_ROUTE = "/quiz";
export const RESULTS_ROUTE = "/results";

//*********************************************************
// Routes
//*********************************************************
const Routes = () => (
	<Router>
		<Switch>
			<Route exact path={HOME_ROUTE} component={Home}/>
			<Route exact path={QUIZ_ROUTE} component={Quiz}/>
			<Route path={RESULTS_ROUTE} component={Results}/>
		</Switch>
	</Router>
);

export default Routes;
