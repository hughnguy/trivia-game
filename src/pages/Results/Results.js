import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HOME_ROUTE } from "trivia-game/src/Routes";
import { getNumberCorrect, getTotalNumberOfQuestions, playAgain } from "trivia-game/src/redux/modules/quiz/quiz";
import ResultsView from "trivia-game/src/pages/Results/components/ResultsView";
import Routing from "trivia-game/src/router";
const { Redirect } = Routing;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
	 * If quiz is complete
	 */
	isComplete: PropTypes.bool.isRequired,
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
const mapStateToProps = (state) => ({
	isComplete: state.quiz.isComplete,
	questions: state.quiz.questions,
	answers: state.quiz.answers,
	score: getNumberCorrect(state),
	total: getTotalNumberOfQuestions(state)
});

const mapDispatchToProps = {
	playAgain: playAgain
};

//*********************************************************
// Component
//*********************************************************
export const Results = ({
	isComplete,
	score,
	total,
	questions,
	answers,
	playAgain
}) => {

	if(!isComplete) {
		return <Redirect to={HOME_ROUTE}/>;
	}

	return (
		<ResultsView
			score={score}
			total={total}
			questions={questions}
			answers={answers}
			playAgain={playAgain}
		/>
	);
};

Results.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Results);
