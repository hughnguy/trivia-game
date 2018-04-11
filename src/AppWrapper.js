import React from "react";
import {
	View,
	Dimensions
} from "react-native";
import Routes from "trivia-game/src/Routes";
import styled from "styled-components";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

//*********************************************************
// Styles
//*********************************************************
const StyledView = styled.View`
	width: ${deviceWidth};
	height: ${deviceHeight};
`;

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
			<StyledView>
				<Routes/>
			</StyledView>
		);
	}
}