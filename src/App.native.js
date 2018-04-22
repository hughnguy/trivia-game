import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import StyledComponents, { ThemeProvider } from "styled-components";
import AppWrapper from "trivia-game/src/AppWrapper";
import themes from "trivia-game/src/themes/themes";
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

export default App;
