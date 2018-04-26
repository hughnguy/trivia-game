import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "trivia-game/src/components/Button";

//*********************************************************
// Styles
//*********************************************************
export const OuterView = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;

export const InnerView = styled.div`
	flex-direction: row;
	display: flex;
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
const FooterButton = ({
	title,
	...rest
}) => (
	<OuterView data-test="footer-button">
		<InnerView>
			<Button title={title} {...rest}/>
		</InnerView>
	</OuterView>
);

FooterButton.propTypes = propTypes;

export default FooterButton;