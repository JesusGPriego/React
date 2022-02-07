import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('testing RealExamplRef Component', () => {
  test('should match snapshot.', () => {

    const wrapper = shallow(<RealExampleRef/>)
    expect(wrapper).toMatchSnapshot();
  });   


  test('should show MultipleCustomHook component.', () => {

    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
  
  
});
