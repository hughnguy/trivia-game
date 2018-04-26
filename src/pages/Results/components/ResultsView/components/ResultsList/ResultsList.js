import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//*********************************************************
// Styles
//*********************************************************
const ResultListView = styled.div`
	flex-direction: column;
	padding: 10px;
	margin-bottom: ${({isLast}) => isLast ? "100px" : "10px"};
`;

const ResultListText = styled.div`
	color: white;
	text-align: center;
`;

const ResultListAnswer = styled.div`
	color: ${({correct}) => correct ? "green" : "red"};
	text-align: center;
`;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
	 * Key value map of answer for each question id
	 */
	answers: PropTypes.object.isRequired,
	/**
	 * Array of questions
	 */
	questions: PropTypes.arrayOf(PropTypes.shape({
		category: PropTypes.string,
		type: PropTypes.string,
		question: PropTypes.string,
		correct_answer: PropTypes.string,
		incorrect_answers: PropTypes.arrayOf(PropTypes.string)
	})).isRequired
};

//*********************************************************
// Component
//*********************************************************
const ResultsList = ({answers, questions})  => {

	return questions.map(({id, correct_answer, question}, index) => {

		const yourAnswer = answers[id];
		const correct = (yourAnswer === correct_answer);
		const isLast = (index === questions.length - 1);

		return (
			<ResultListView key={id} isLast={isLast}>
				<ResultListText>{index + 1}) {question}</ResultListText>
				<ResultListText>Actual answer: {correct_answer}</ResultListText>
				<ResultListAnswer correct={correct}>Your answer: {yourAnswer}</ResultListAnswer>
			</ResultListView>
		);
	});
};

ResultsList.propTypes = propTypes;

export default ResultsList;
