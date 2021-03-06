import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import strings from "trivia-game/src/strings";
import Title from "trivia-game/src/components/Title/Title";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";
import ResultsList from "trivia-game/src/pages/Results/components/ResultsView/components/ResultsList/ResultsList";

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
			<Title title={strings.en.RESULTS_VIEW_TITLE}/>
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
			title={strings.en.RESULTS_VIEW_FOOTER}
			onPress={playAgain}
		/>
	</StyledView>
);

ResultsView.propTypes = propTypes;

export default ResultsView;
