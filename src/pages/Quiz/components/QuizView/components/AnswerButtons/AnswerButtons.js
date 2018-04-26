import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "trivia-game/src/components/Button/Button";
import strings from "trivia-game/src/strings";

//*********************************************************
// Styles
//*********************************************************
const ButtonView = styled.div`
	margin-top: 50px;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

const ButtonContainer = styled.div`
	display: flex;
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
	<ButtonView data-test="answer-buttons">
		<ButtonContainer>
			<Button
				data-test="true-button"
				title={strings.en.ANSWER_BUTTON_TRUE}
				onClick={onTrueAnswer}
			/>
		</ButtonContainer>
		<ButtonContainer>
			<Button
				data-test="false-button"
				title={strings.en.ANSWER_BUTTON_FALSE}
				onClick={onFalseAnswer}
			/>
		</ButtonContainer>
	</ButtonView>
);

AnswerButtons.propTypes = propTypes;

export default AnswerButtons;
