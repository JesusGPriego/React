import React from 'react';
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodo } from '../../fixtures/demoTodos';




describe('testing TodoListItem component', () => {
  

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(< TodoListItem
        todo={demoTodo[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />)

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
    test('should call handleDelete function', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1);
    });
    

    test('should call handleToggle function', () => {
      wrapper.find('.false').simulate('click');
      expect(handleToggle).toHaveBeenCalledWith(1);
    });

    test('should show the text correctly', () => {

        expect(wrapper.find('.false').text().trim()).toBe('1. testing in react');
    });
    
    

});
