import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodo } from '../../fixtures/demoTodos';

describe('testing TodoList Component', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
          <TodoList
            todos={demoTodo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
    )

    

    test('shoul return itself matching snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
    test('should display two <TodoListItem />', () => {
    //   console.log(wrapper.find('TodoListItem').length); 
        expect(wrapper.find('TodoListItem').length).toBe(demoTodo.length);
        expect(
            wrapper
            .find('TodoListItem')
            .at(0).prop('handleDelete'))
            .toEqual(
                expect
                .any(
                    Function
                )
            );
    });
    

});
