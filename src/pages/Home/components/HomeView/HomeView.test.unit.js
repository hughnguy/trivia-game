import React from "react";
import { shallow } from "enzyme";
import HomeView, { HighScoreText } from "trivia-game/src/pages/Home/components/HomeView/HomeView";

describe("HomeView", function() {

    let sandbox;

    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        sandbox.restore();
    });

    context("when clicking footer button", function() {

        it("onBegin handler gets called", function () {
            const onBeginSpy = sandbox.spy();
            const wrapper = shallow(
                <HomeView
                    onBegin={onBeginSpy}
                    highScore={0}
                />
            );
            wrapper.find("FooterButton").props().onClick();
            assert.equal(onBeginSpy.callCount, 1);
        });
    });
});