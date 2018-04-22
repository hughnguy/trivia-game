import React from "react";
import { shallow } from "enzyme";
import Spinner from "trivia-game/src/components/Spinner/Spinner";

describe("Spinner", function() {

	context("when rendering", () => {

		it("displays a circle svg", function () {
			const wrapper = shallow(
				<Spinner/>
			);
			assert.isTrue(wrapper.find("circle").exists());
		});
	});
});