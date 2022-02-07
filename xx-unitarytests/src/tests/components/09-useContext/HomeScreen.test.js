import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Testing <HomeScreen />', () => {


    const user = {
        name: 'Jesús',
        email: 'suleware@gmail.com',
    };

    const wrapper = mount(
        <UserContext.Provider value={
            user
        }>
            <HomeScreen />
        </UserContext.Provider>
    );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
