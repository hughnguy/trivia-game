import React, { Component } from "react";
import {
	Text,
	TouchableOpacity,
	Dimensions
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "trivia-game/src/components/Button/Button";

const deviceWidth = Dimensions.get("window").width;

//*********************************************************
// Styles
//*********************************************************
const OuterView = styled.View`
	position: absolute;
	bottom: 0;
	width: ${deviceWidth};
`;

const InnerView = styled.View`
	flex-direction: row;
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
// FooterButton component
//*********************************************************
class FooterButton extends Component {

	render() {
		const { title, ...rest } = this.props;

		return (
			<OuterView>
				<InnerView>
					<Button title={title} {...rest}/>
				</InnerView>
			</OuterView>
		);
	}
}

FooterButton.propTypes = propTypes;

export default FooterButton;