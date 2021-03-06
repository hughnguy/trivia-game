import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RESULTS_ROUTE } from "trivia-game/src/Routes";
import { loadQuestions, answerQuestion, areQuestionsLoaded, getCurrentQuestion, getTotalNumberOfQuestions } from "trivia-game/src/redux/modules/quiz/quiz";
import QuizView from "trivia-game/src/pages/Quiz/components/QuizView/QuizView";
import Routing from "trivia-game/src/router";
const { Redirect } = Routing;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
	 * If questions are loading
	 */
	isLoading: PropTypes.bool.isRequired,
	/**
	 * If quiz is complete
	 */
	isComplete: PropTypes.bool.isRequired,
	/**
	 * Action creator to fetch questions from server
	 */
	loadQuestions: PropTypes.func.isRequired,
	/**
	 * Action creator to answer current question
	 */
	answerQuestion: PropTypes.func.isRequired,
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
	total: PropTypes.number,
	/**
	 * Flag to see if questions have been loaded yet
	 */
	areQuestionsLoaded: PropTypes.bool.isRequired
};


//*********************************************************
// Redux mappings
//*********************************************************
const mapStateToProps = (state) => ({
	isLoading: state.quiz.isLoading,
	isComplete: state.quiz.isComplete,
	currentStep: state.quiz.currentStep,
	currentQuestion: getCurrentQuestion(state),
	total: getTotalNumberOfQuestions(state),
	areQuestionsLoaded: areQuestionsLoaded(state)
});

const mapDispatchToProps = {
	loadQuestions: loadQuestions,
	answerQuestion: answerQuestion
};

//*********************************************************
// Component
//*********************************************************
export class Quiz extends Component {

	async componentDidMount() {
		const { loadQuestions, areQuestionsLoaded } = this.props;

		if(!areQuestionsLoaded) {
			try {
				await loadQuestions(GLOBAL.NUMBER_QUESTIONS, GLOBAL.DIFFICULTY);
			} catch (e) {
				alert("Unable to reach server: " + JSON.stringify(e));
			}
		}
	}

	render() {
		const { isComplete, isLoading, currentQuestion, currentStep, total, answerQuestion } = this.props;

		if(isComplete) {
			return <Redirect to={RESULTS_ROUTE}/>;
		}

		return (
			<QuizView
				isLoading={isLoading}
				currentQuestion={currentQuestion}
				currentStep={currentStep}
				total={total}
				onTrueAnswer={() => answerQuestion("True")}
				onFalseAnswer={() => answerQuestion("False")}
			/>
		);
	}
}

Quiz.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
