import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import {
	Text,
	View,
	TouchableOpacity,
	ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { goToScene, RESULTS_SCENE } from "trivia-game/src/Routes";
import { loadQuestions } from "trivia-game/src/redux/modules/quiz";
import Title from "trivia-game/src/components/Title/Title";
import Button from "trivia-game/src/components/Button/Button";

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
	 * Action creator to fetch questions from server
	 */
	loadQuestions: PropTypes.func.isRequired
};


//*********************************************************
// Redux mappings
//*********************************************************
const mapStateToProps = (state, ownProps) => ({
	questions: state.quiz.questions
});

const mapDispatchToProps = {
	loadQuestions: loadQuestions
};

//*********************************************************
// Quiz Scene
//*********************************************************
class Quiz extends Component {

	constructor(props) {
		super(props);
		this.state = {
			/**
			 * Loading state
			 */
			isLoading: true,
			/**
			 * Current step out of total
			 */
			step: 0,
			/**
			 * Key value map of answers for each question
			 */
			answers: {}
		};
	}

	componentDidMount() {
		const { loadQuestions } = this.props;

		loadQuestions(GLOBAL.NUMBER_QUESTIONS, GLOBAL.DIFFICULTY).then(() => {
			this.setState({isLoading:false});
		}).catch(() => {
			alert("Unable to reach server.");
		});
	}

	/**
	 * Handle the press of an answer
	 */
	handleAnswerPress = (answer) => {
		const answers = this.state.answers;
		const currentStep = this.state.step;
		const nextStep = this.state.step + 1;

		if(this.isLastQuestion()) {
			this.setState({
				answers: {
					...answers,
					[currentStep]: answer
				}
			}, () => {
				this.completeQuiz();
			});

		} else {
			this.setState({
				answers: {
					...answers,
					[currentStep]: answer
				},
				step: nextStep
			});
		}
	};

	/**
	 * Check if the question is the last one
	 */
	isLastQuestion = () => {
		return (this.state.step == this.props.questions.length-1);
	};

	/**
	 * Finish the quiz and go to the results page
	 */
	completeQuiz = () => {
		goToScene[RESULTS_SCENE]({
			answers: this.state.answers
		});
	};

	/**
	 * Renders a spinner during loading state
	 */
	renderSpinner = () => {
		return (
			<SpinnerView>
				<ActivityIndicator size="large" color="#19ADD8"/>
			</SpinnerView>
		);
	};

	/**
	 * Renders the category of the question
	 */
	renderTitle = () => {
		const { category } = this.props.questions[this.state.step];

		return (
			<Title title={category}/>
		);
	};

	/**
	 * Renders the question
	 */
	renderQuestion = () => {
		const { question } = this.props.questions[this.state.step];

		return (
			<StyledText>
				{question}
			</StyledText>
		);
	};

	/**
	 * Renders the current step number out of total
	 */
	renderStepNumber = () => {
		const index = this.state.step + 1;
		const total = this.props.questions.length;

		return (
			<StyledText>
				{index} of {total}
			</StyledText>
		);
	};

	/**
	 * Renders the answer buttons
	 */
	renderButtons = () => {
		return (
			<ButtonView>
				<ButtonContainer>
					<Button title="True" onPress={() => this.handleAnswerPress("True")}/>
				</ButtonContainer>
				<ButtonContainer>
					<Button title="False" onPress={() => this.handleAnswerPress("False")}/>
				</ButtonContainer>
			</ButtonView>
		);
	};

	render() {
		if(this.state.isLoading) {
			return this.renderSpinner();
		}
		return (
			<StyledView>
				<Row>
					{this.renderTitle()}
				</Row>
				<QuestionView>
					{this.renderQuestion()}
				</QuestionView>
				<Row>
					{this.renderStepNumber()}
				</Row>
				<Row>
					{this.renderButtons()}
				</Row>
			</StyledView>
		);
	}
}

Quiz.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
