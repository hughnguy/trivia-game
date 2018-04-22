import React from "react";
import Routes from "trivia-game/src/Routes";

//*********************************************************
// Component
//*********************************************************
export default class AppWrapper extends React.Component {

	/**
	 * Initialization code and checks would normally go in this class, such as
	 * setting up push notifications, check if session is expired,
	 * loading fonts, load user, etc...
	 */

	render() {
		return (
			<Routes/>
		);
	}
}