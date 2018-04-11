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

//*********************************************************
// Styles
//*********************************************************
const StyledView = styled.View`
	flex: 1;
	flex-direction: column;
	background-color: #115492;
`;

const ResultListView = styled.View`
	flexDirection: column;
	padding: 10px;
	margin-bottom: ${({isLast}) => isLast ? "100px" : "10px"};
`;

const ResultListText = styled.Text`
	color: white;
	text-align: center;
`;

const ResultListAnswer = styled.Text`
	color: ${({correct}) => correct ? "green" : "red"};
	text-align: center;
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
	answers: PropTypes.object.isRequired
};

//*********************************************************
// Redux mappings
//*********************************************************
const mapStateToProps = (state, ownProps) => ({
	questions: state.quiz.questions
});

//*********************************************************
// Results Scene
//*********************************************************
class Results extends Component {

	constructor(props) {
		super(props);
		this.state = {
			/**
			 * The number of questions answered correctly
			 */
			numberCorrect: 0
		};
	}

	componentDidMount() {
		this.calculateScore();
	}

	/**
	 * Calculates the score based on the map of answers passed into component
	 */
	calculateScore = () => {
		const { answers, questions } = this.props;
		let numberCorrect = 0;

		questions.map(({correct_answer}, index) => {
			const currentAnswer = answers[index];

			if(currentAnswer === correct_answer) {
				numberCorrect++;
			}
		});

		this.setState({numberCorrect: numberCorrect});
	};

	/**
	 * Navigate to home route in order to play again
	 */
	handlePlayAgainPress = () => {
		goToScene[HOME_SCENE]();
	};

	/**
	 * Renders the score out of total
	 */
	renderScore = () => {
		const { questions } = this.props;
		const total = questions.length;

		return (
			<Title title={`${this.state.numberCorrect} / ${total}`}/>
		);
	};

	/**
	 * Renders the results
	 */
	renderResults = () => {
		return (
			<ResultScrollView>
				{this.renderResultsList()}
			</ResultScrollView>
		);
	};

	/**
	 * Renders list of questions and answers
	 */
	renderResultsList = () => {
		const { answers, questions } = this.props;

		return questions.map(({correct_answer, question}, index) => {

			const yourAnswer = answers[index];
			const correct = (yourAnswer === correct_answer);
			const isLast = (index === questions.length - 1);

			return (
				<ResultListView key={index} isLast={isLast}>
					<ResultListText>{index + 1}) {question}</ResultListText>
					<ResultListText>Actual answer: {correct_answer}</ResultListText>
					<ResultListAnswer correct={correct}>Your answer: {yourAnswer}</ResultListAnswer>
				</ResultListView>
			);
		});
	};

	render() {
		return (
			<StyledView>
				<Row>
					<Title title="You scored"/>
				</Row>

				<Row>
					{this.renderScore()}
				</Row>

				<ResultContainer>
					<ResultInner>
						{this.renderResults()}
					</ResultInner>
				</ResultContainer>

				<FooterButton
					title="Play again?"
					onPress={this.handlePlayAgainPress}
				/>
			</StyledView>
		);
	}
}

export default connect(mapStateToProps, null)(Results);
