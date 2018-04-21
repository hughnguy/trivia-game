import React from "react";
import Routing, { Router } from "trivia-game/src/router";
const { Route, Switch } = Routing;

//*********************************************************
// Page components
//*********************************************************
import Home from "trivia-game/src/pages/Home";
import Quiz from "trivia-game/src/pages/Quiz";

//*********************************************************
// Route names
//*********************************************************
export const HOME_ROUTE = "/";
export const QUIZ_ROUTE = "/quiz";

//*********************************************************
// Routes
//*********************************************************
const Routes = () => (
    <Router>
        <Switch>
            <Route exact path={HOME_ROUTE} component={Home}/>
            <Route exact path={QUIZ_ROUTE} component={Quiz}/>
        </Switch>
    </Router>
);

export default Routes;
