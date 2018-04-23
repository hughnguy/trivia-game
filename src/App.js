import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import themes from "trivia-game/src/themes/themes";
import AppWrapper from "trivia-game/src/AppWrapper";
import store, { persistor } from "trivia-game/src/redux/store";

//*********************************************************
// Root component
//*********************************************************
const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ThemeProvider theme={themes.lightTheme}>
				<AppWrapper/>
			</ThemeProvider>
		</PersistGate>
	</Provider>
);

ReactDOM.render(
	<App/>,
	document.getElementById("root")
);
