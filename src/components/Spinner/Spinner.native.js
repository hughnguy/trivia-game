import React from "react";
import styled from "styled-components";
import {
	View,
	ActivityIndicator
} from "react-native";

//*********************************************************
// Styles
//*********************************************************
const SpinnerView = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

//*********************************************************
// Component
//*********************************************************
const Spinner = ({...rest}) => (
	<SpinnerView>
		<ActivityIndicator size="large" color="#19ADD8" {...rest}/>
	</SpinnerView>
);

export default Spinner;