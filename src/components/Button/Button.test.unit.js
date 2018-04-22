import React from "react";
import { shallow } from "enzyme";
import Button, { StyledText } from "trivia-game/src/components/Button/Button";

describe("Button", function() {

	context("when rendering", () => {

		it("displays a title", function () {
			const title = "test";
			const wrapper = shallow(
				<Button
					title={title}
				/>
			);
			assert.equal(wrapper.find(StyledText).props().children, title);
		});
	});
});