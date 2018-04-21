import React from "react";
import {
	Text,
	TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";

//*********************************************************
// Styles
//*********************************************************
const StyledTouchableOpacity = styled.TouchableOpacity`
	flex: 1;
    background-color: #e8544e;
    padding-horizontal: 12px;
    padding-vertical: 8px;
    border-radius: 2px;
`;

const StyledText = styled.Text`
    color: white;
    text-align: center;
    font-size: 30px;
`;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
	 * Title inside button
	 */
	title: PropTypes.string.isRequired
};

//*********************************************************
// Component
//*********************************************************
const Button = ({
	title,
	...rest
}) => (
	<StyledTouchableOpacity {...rest}>
		<StyledText>
			{title}
		</StyledText>
	</StyledTouchableOpacity>
);

Button.propTypes = propTypes;

export default Button;