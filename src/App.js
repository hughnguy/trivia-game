import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppWrapper from "trivia-game/src/AppWrapper";
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