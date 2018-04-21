import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import StyledComponents, { ThemeProvider } from "styled-components";
import themes from "trivia-game/src/themes/themes";
import AppWrapper from "trivia-game/src/AppWrapper";
import configureStore from "trivia-game/src/redux/store";

//*********************************************************
// Initialize redux store
//*********************************************************
const store = configureStore();

//*********************************************************
// Root component
//*********************************************************
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={themes.lightTheme}>
                    <AppWrapper/>
                </ThemeProvider>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
