import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import {
	Text,
	View,
	TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "trivia-game/src/components/Title/Title";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";
import strings from "trivia-game/src/strings";

//*********************************************************
// Styles
//*********************************************************
const StyledView = styled.View`
	flex: 1;
	flex-direction: column;
	background-color: #353692;
`;

const Row = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

const StyledText = styled.Text`
	color: white;
	font-size: 20;
	text-align: center;
`;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
     * Event handler for starting the game
     */
	onBegin: PropTypes.func.isRequired,
	/**
     * High score for the game
     */
	highScore: PropTypes.number.isRequired
};

//*********************************************************
// Component
//*********************************************************
const HomeView = ({onBegin, highScore}) => (
	<StyledView>
		<Row>
			<Title title={strings.en.HOME_VIEW_TITLE}/>
		</Row>
		<Row>
			<StyledText>
				{strings.en.HOME_VIEW_SUB_TITLE(GLOBAL.NUMBER_QUESTIONS)}
			</StyledText>
		</Row>
		<Row>
			<StyledText>
				{strings.en.HOME_VIEW_CAN_YOU_SCORE}
			</StyledText>
		</Row>
		<Row>
			<StyledText>
				{strings.en.HOME_VIEW_HIGH_SCORE}: {highScore}
			</StyledText>
		</Row>
		<FooterButton
			title={strings.en.HOME_VIEW_FOOTER}
			onPress={onBegin}
		/>
	</StyledView>
);

HomeView.propTypes = propTypes;

export default HomeView;
