import React from 'react';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodo } from '../../fixtures/demoTodos';


describe('testing todoReducer', () => {

  test('should return default state', () => {
    
    const state = todoReducer(demoTodo, {});
    console.log(state);
    expect(state).toEqual(demoTodo);

  });

  test('should add a todo', () => {
    const state = todoReducer(demoTodo,{type:'add',payload:{
        id:3,
        desc:'learn NODE.js',
        done:false,
    }})

    expect(state.length).toBe(3);

  });

  test('should delete the second todo in demoTodos', () => {
    
    const state = todoReducer(demoTodo, {
        type:'delete',
        payload:2,
    });

    expect(state.length).toBe(1);

  });

  test('should swap "done" value for todo with id 1', () => {
    const state = todoReducer(demoTodo, {
        type:'toggle',
        payload:1,
    })

    expect(state[0].done).toBe(true);

  });
  
  
  
  
});
