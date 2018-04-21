import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import {
	Text,
	View,
	ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "trivia-game/src/components/Title/Title";
import AnswerButtons from "trivia-game/src/pages/Quiz/components/QuizView/components/AnswerButtons/AnswerButtons";

//*********************************************************
// Styles
//*********************************************************
const StyledView = styled.View`
	flex: 1;
	flex-direction: column;
	background-color: #43ade4;
	padding: 20px;
`;

const QuestionView = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-width: 2;
	border-color: white;
	border-radius: 10px;
	padding: 20px;
`;

const SpinnerView = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const StyledText = styled.Text`
	color: white;
	font-size: 20;
	text-align: center;
`;

const Row = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
	 * If questions are loading
	 */
	isLoading: PropTypes.bool.isRequired,
	/**
	 * Event handler when answering true
	 */
	onTrueAnswer: PropTypes.func.isRequired,
	/**
	 * Event handler when answering false
	 */
	onFalseAnswer: PropTypes.func.isRequired,
	/**
	 * Current question in quiz
	 */
	currentQuestion: PropTypes.shape({
		category: PropTypes.string,
		type: PropTypes.string,
		question: PropTypes.string,
		correct_answer: PropTypes.string,
		incorrect_answers: PropTypes.arrayOf(PropTypes.string)
	}),
	/**
	 * The current step number
	 */
	currentStep: PropTypes.number,
	/**
	 * Total number of questions
	 */
	total: PropTypes.number
};

//*********************************************************
// Component
//*********************************************************
const QuizView = ({
	isLoading,
	currentQuestion,
	currentStep,
	total,
	onTrueAnswer,
	onFalseAnswer,
}) => {

	if(isLoading) {
		return (
			<SpinnerView>
				<ActivityIndicator size="large" color="#19ADD8"/>
			</SpinnerView>
		);
	}

	return (
		<StyledView>
			<Row>
				<Title title={currentQuestion.category}/>
			</Row>
			<QuestionView>
				<StyledText>
					{currentQuestion.question}
				</StyledText>
			</QuestionView>
			<Row>
				<StyledText>
					{currentStep + 1} of {total}
				</StyledText>
			</Row>
			<Row>
				<AnswerButtons
					onTrueAnswer={onTrueAnswer}
					onFalseAnswer={onFalseAnswer}
				/>
			</Row>
		</StyledView>
	);
};

QuizView.propTypes = propTypes;

export default QuizView;
