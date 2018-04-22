import React from "react";
import { shallow } from "enzyme";
import { QUIZ_ROUTE } from "trivia-game/src/Routes";
import { Home } from "trivia-game/src/pages/Home/Home";

describe("Home", function() {

	context("when rendering", () => {

		it("displays HomeView if game has not started yet", function () {
			const wrapper = shallow(
				<Home
					history={{}}
					highScore={0}
					resumeGame={false}
				/>
			);
			assert.isTrue(wrapper.find("HomeView").exists());
		});

		it("redirects to quiz route if game is still resuming", function () {
			const wrapper = shallow(
				<Home
					history={{}}
					highScore={0}
					resumeGame={true}
				/>
			);
			assert.equal(wrapper.find("Redirect").props().to, QUIZ_ROUTE);
		});
	});
});