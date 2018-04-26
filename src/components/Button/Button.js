import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//*********************************************************
// Styles
//*********************************************************
export const StyledButton = styled.button`
	flex: 1;
	background-color: #e8544e;
	padding: 8px 12px;
	border-radius: 2px;
	cursor: pointer;
`;

export const StyledText = styled.div`
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
	<StyledButton data-test="button" {...rest}>
		<StyledText>
			{title}
		</StyledText>
	</StyledButton>
);

Button.propTypes = propTypes;

export default Button;