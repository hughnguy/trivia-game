import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "trivia-game/src/components/Title/Title";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";

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
			<Title title="Welcome to the Trivia Challenge!"/>
		</Row>
		<Row>
			<StyledText>
                You will be presented with {GLOBAL.NUMBER_QUESTIONS} True or False questions.
			</StyledText>
		</Row>
		<Row>
			<StyledText>
                Can you score 100%?
			</StyledText>
		</Row>
		<Row>
			<HighScoreText>
                High Score: {highScore}
			</HighScoreText>
		</Row>
		<FooterButton
			title="Begin"
			onClick={onBegin}
		/>
	</StyledView>
);

HomeView.propTypes = propTypes;

export default HomeView;