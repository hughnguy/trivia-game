import React, { Component } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	ScrollView
} from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goToScene, HOME_SCENE } from "trivia-game/src/Routes";
import Title from "trivia-game/src/components/Title/Title";
import Button from "trivia-game/src/components/Button/Button";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";
import { getNumberCorrect, getTotalNumberOfQuestions, playAgain } from "trivia-game/src/redux/modules/quiz";
import ResultsList from "trivia-game/src/scenes/Results/components/ResultsView/components/ResultsList/ResultsList";

//*********************************************************
// Styles
//*********************************************************
const StyledView = styled.View`
	flex: 1;
	flex-direction: column;
	background-color: #115492;
`;

const Row = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ResultContainer = styled.View`
	flex: 4;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ResultScrollView = styled.ScrollView`
	flex: 1;
`;

const ResultInner = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
	 * Array of questions loaded from server
	 */
	questions: PropTypes.arrayOf(PropTypes.shape({
		category: PropTypes.string,
		type: PropTypes.string,
		question: PropTypes.string,
		correct_answer: PropTypes.string,
		incorrect_answers: PropTypes.arrayOf(PropTypes.string)
	})).isRequired,
	/**
	 * Key value map of answers for each question
	 */
	answers: PropTypes.object.isRequired,
	/**
	 * Number of correct answers
	 */
	score: PropTypes.number.isRequired,
	/**
	 * Total number of questions
	 */
	total: PropTypes.number.isRequired,
	/**
	 * Restarts the quiz
	 */
	playAgain: PropTypes.func.isRequired
};

//*********************************************************
// Component
//*********************************************************
const ResultsView = ({
	score,
	total,
	questions,
	answers,
	playAgain
}) => (
	<StyledView>
		<Row>
			<Title title="You scored"/>
		</Row>

		<Row>
			<Title title={`${score} / ${total}`}/>
		</Row>

		<ResultContainer>
			<ResultInner>
				<ResultScrollView>
					<ResultsList
						questions={questions}
						answers={answers}
					/>
				</ResultScrollView>
			</ResultInner>
		</ResultContainer>

		<FooterButton
			title="Play again?"
			onPress={playAgain}
		/>
	</StyledView>
);

ResultsView.propTypes = propTypes;

export default ResultsView;
