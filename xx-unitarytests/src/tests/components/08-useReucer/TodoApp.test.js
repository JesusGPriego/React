import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodo } from '../../fixtures/demoTodos';
import {act} from '@testing-library/react';

describe('Testing <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />)

    Storage.prototype.setItem = jest.fn(() => {});
    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should add a ToDo', () => {
        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
        })
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 2 )'); 
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
    

    test('should delete a ToDo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 0 )'); 
    });
    
    

});
