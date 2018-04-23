import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "trivia-game/src/components/Title/Title";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";
import strings from "trivia-game/src/strings";

//*********************************************************
// Styles
//*********************************************************
export const StyledView = styled.div`
    height: 100vh;
	flex: 1;
	flex-direction: column;
	background-color: #353692;
`;

export const Row = styled.div`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

export const StyledText = styled.div`
	color: white;
	font-size: 20px;
	text-align: center;
`;

export const HighScoreText = styled.div`
	color: white;
	font-size: 25px;
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
			<HighScoreText>
				{strings.en.HOME_VIEW_HIGH_SCORE}: {highScore}
			</HighScoreText>
		</Row>
		<FooterButton
			title={strings.en.HOME_VIEW_FOOTER}
			onClick={onBegin}
		/>
	</StyledView>
);

HomeView.propTypes = propTypes;

export default HomeView;