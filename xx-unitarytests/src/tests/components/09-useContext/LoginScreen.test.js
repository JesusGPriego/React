import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Testing LoginScreen', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={
            setUser
        }>
            <LoginScreen />
        </UserContext.Provider>
    )
  
    test('should matchSnapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });    

});
