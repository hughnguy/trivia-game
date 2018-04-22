import React from "react";
import { shallow } from "enzyme";
import FooterButton from "trivia-game/src/components/FooterButton/FooterButton";
import Button from "trivia-game/src/components/Button/Button";

describe("FooterButton", function() {

    context("when rendering", () => {

        it("passes title into button", function () {
            const title = "test";
            const wrapper = shallow(
                <FooterButton
                    title={title}
                />
            );
            assert.equal(wrapper.find(Button).props().title, title);
        });
    });
});