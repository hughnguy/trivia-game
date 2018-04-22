import React from "react";
import { shallow } from "enzyme";
import Title, { StyledText } from "trivia-game/src/components/Title/Title";

describe("Title", function() {

    context("when rendering", () => {

        it("displays a title", function () {
            const title = "test";
            const wrapper = shallow(
                <Title
                    title={title}
                    />
            );
            assert.equal(wrapper.find(StyledText).props().children, title)
        });
    });
});