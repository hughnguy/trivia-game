import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from './Button';

describe("A suite", function() {

    it("Renders a button", function() {
        const wrapper = shallow(
            <Button
                title="test"
            />
        );
        console.log(wrapper)
    });
});