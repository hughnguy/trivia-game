import React from "react";
import Routing, { Router } from "trivia-game/src/router";
const { Route, Switch } = Routing;

//*********************************************************
// Page components
//*********************************************************
import Home from "trivia-game/src/pages/Home";

//*********************************************************
// Route names
//*********************************************************
export const HOME_ROUTE = "/";

//*********************************************************
// Routes
//*********************************************************
const Routes = () => (
    <Router>
        <Switch>
            <Route exact path={HOME_ROUTE} component={Home}/>
        </Switch>
    </Router>
);

export default Routes;
