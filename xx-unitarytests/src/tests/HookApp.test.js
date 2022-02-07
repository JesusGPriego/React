import { shallow } from "enzyme"
import { HookApp } from "../HookApp";
import React from 'react';

describe('HookApp testing', () => {
    test('should match snapshot', () => {
        const wrapper = shallow( <HookApp /> );
        expect(wrapper).toMatchSnapshot();
    })
    
})
