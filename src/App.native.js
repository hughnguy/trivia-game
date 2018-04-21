import React from "react";
import { Provider } from "react-redux";
import StyledComponents, { ThemeProvider } from "styled-components";
import AppWrapper from "trivia-game/src/AppWrapper";
import themes from "trivia-game/src/themes/themes";
import configureStore from "trivia-game/src/redux/store";

//*********************************************************
// Initialize redux store
//*********************************************************
const store = configureStore();

//*********************************************************
// Root component
//*********************************************************
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWrapper/>
			</Provider>
		);
	}
}
