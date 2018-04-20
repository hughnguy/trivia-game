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
import ResultsView from "trivia-game/src/scenes/Results/components/ResultsView/ResultsView";

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
	total: PropTypes.number,
	/**
	 * Restarts the quiz
	 */
	playAgain: PropTypes.func.isRequired
};

//*********************************************************
// Redux mappings
//*********************************************************
const mapStateToProps = (state, ownProps) => ({
	questions: state.quiz.questions,
	answers: state.quiz.answers,
	score: getNumberCorrect(state),
	total: getTotalNumberOfQuestions(state)
});

const mapDispatchToProps = {
	playAgain: playAgain
};

//*********************************************************
// Results Scene
//*********************************************************
class Results extends Component {

	componentWillReceiveProps(nextProps) {
		if(!nextProps.isComplete) {
			goToScene[HOME_SCENE]();
		}
	}

	render() {
		const { score, total, questions, answers, playAgain } = this.props;
		return (
			<ResultsView
				score={score}
				total={total}
				questions={questions}
				answers={answers}
				playAgain={playAgain}
			/>
		);
	}
}

Results.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Results);
