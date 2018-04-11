import React, { Component } from "react";
import {
	Text,
	TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";

//*********************************************************
// Styles
//*********************************************************
const StyledText = styled.Text`
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
// Title component
//*********************************************************
class Title extends Component {

	render() {
		const { title, ...rest } = this.props;

		return (
			<StyledText {...rest}>
				{title}
			</StyledText>
		);
	}
}

Title.propTypes = propTypes;

export default Title;