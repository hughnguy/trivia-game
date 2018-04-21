import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import {
	Text,
	View,
	TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { QUIZ_ROUTE } from "trivia-game/src/Routes";
import Title from "trivia-game/src/components/Title/Title";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";

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
	 * History object provided by router
	 */
	history: PropTypes.object.isRequired
};

//*********************************************************
// Component
//*********************************************************
const Home = ({history}) => (
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
		<FooterButton
			title="Begin"
			onPress={() => history.push(QUIZ_ROUTE)}
		/>
	</StyledView>
);

Home.propTypes = propTypes;

export default Home;
