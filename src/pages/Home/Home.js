import React  from "react";
import { QUIZ_ROUTE } from "trivia-game/src/Routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { areQuestionsLoaded } from "trivia-game/src/redux/modules/quiz";
import HomeView from "trivia-game/src/pages/Home/components/HomeView";
import Routing from "trivia-game/src/router";
const { Redirect } = Routing;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
    /**
     * History object provided by router
     */
	history: PropTypes.object.isRequired,
    /**
     * High score for the game
     */
	highScore: PropTypes.number.isRequired,
    /**
     * Flag to auto-resume game if questions have been previously loaded
     */
	resumeGame: PropTypes.bool.isRequired
};

//*********************************************************
// Redux mappings
//*********************************************************
const mapStateToProps = (state) => ({
	highScore: state.quiz.highScore,
	resumeGame: areQuestionsLoaded(state)
});

//*********************************************************
// Component
//*********************************************************
export const Home = ({
	history,
	highScore,
	resumeGame
}) => {

	if(resumeGame) {
		return <Redirect to={QUIZ_ROUTE}/>;
	}

	return (
		<HomeView
			onBegin={() => history.push(QUIZ_ROUTE)}
			highScore={highScore}
		/>
	);
};

Home.propTypes = propTypes;

export default connect(mapStateToProps, null)(Home);
