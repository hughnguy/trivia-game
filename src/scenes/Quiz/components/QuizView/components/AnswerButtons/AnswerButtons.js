import React, { Component } from "react";
import {
	Text,
	TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "trivia-game/src/components/Button/Button";

//*********************************************************
// Styles
//*********************************************************
const ButtonView = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

const ButtonContainer = styled.View`
	flex: 1;
	flex-direction: row;
	margin: 5px;
`;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
	 * Event handler on answering true
	 */
	onTrueAnswer: PropTypes.func.isRequired,
	/**
	 * Event handler on answering false
	 */
	onFalseAnswer: PropTypes.func.isRequired
};

//*********************************************************
// Component
//*********************************************************
const AnswerButtons = ({onTrueAnswer, onFalseAnswer})  => (
	<ButtonView>
		<ButtonContainer>
			<Button title="True" onPress={onTrueAnswer}/>
		</ButtonContainer>
		<ButtonContainer>
			<Button title="False" onPress={onFalseAnswer}/>
		</ButtonContainer>
	</ButtonView>
);

AnswerButtons.propTypes = propTypes;

export default AnswerButtons;
