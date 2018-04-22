import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//*********************************************************
// Styles
//*********************************************************
export const StyledText = styled.div`
    color: white;
    text-align: center;
    font-size: 40px;
`;

//*********************************************************
// PropTypes
//*********************************************************
const propTypes = {
	/**
     * Title value
     */
	title: PropTypes.string.isRequired
};

//*********************************************************
// Component
//*********************************************************
const Title = ({
	title,
	...rest
}) => (
	<StyledText {...rest}>
		{title}
	</StyledText>
);

Title.propTypes = propTypes;

export default Title;