import React, { Component } from "react";
import * as GLOBAL from "trivia-game/src/globals.js";
import { QUIZ_ROUTE } from "trivia-game/src/Routes";
import styled from "styled-components";

//*********************************************************
// Styles
//*********************************************************
const StyledView = styled.div`
	flex: 1;
	flex-direction: column;
	background-color: #353692;
`;

const Row = styled.div`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

const StyledText = styled.div`
	color: white;
	font-size: 20;
	text-align: center;
`;

//*********************************************************
// Home Scene
//*********************************************************
class Home extends Component {

    render() {
        return (
            <StyledView>
                <Row>
                    <div>Welcome to the Trivia Challenge!</div>
                </Row>
                <Row>
                    <StyledText>
                        You will be presented with {GLOBAL.NUMBER_QUESTIONS} True or False questions.
                    </StyledText>
                </Row>
                <Row>
                    <StyledText>
                        Can you score 100%?
                    </StyledText>
                </Row>

                <button onClick={() => this.props.history.push(QUIZ_ROUTE)}>Test</button>

            </StyledView>
        );
    }
}

export default Home;