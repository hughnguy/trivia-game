import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import { QUIZ_ROUTE } from "trivia-game/src/Routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Title from "trivia-game/src/components/Title/Title";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";
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
     * Flag to see if questions have been loaded yet, resume game if yes
     */
    areQuestionsLoaded: PropTypes.bool.isRequired
};

//*********************************************************
// Redux mappings
//*********************************************************
const mapStateToProps = (state, ownProps) => ({
    highScore: state.quiz.highScore,
    areQuestionsLoaded: (state.quiz.questions.length !== 0)
});

//*********************************************************
// Component
//*********************************************************
const Home = ({
    history,
    highScore,
    areQuestionsLoaded
}) => {

    /* Resume game if questions already loaded */
    if(areQuestionsLoaded) {
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
