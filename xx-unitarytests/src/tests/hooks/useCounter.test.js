import { render, shallow } from 'enzyme';
import {renderHook, act} from '@testing-library/react-hooks';
import React from 'react';
import { useCounter } from '../../hooks/useCounter';

describe('Testing useCounter custom hook', () => {

    
    test('should return default values', () => {
        
        const {result} = renderHook( () => useCounter() )

        const current = result.current;
        expect(current.counter).toBe(10);
        expect(typeof(current.increment)).toBe('function');
        expect(typeof(current.decrement)).toBe('function');
        expect(typeof(current.reset)).toBe('function');
 
    })
    
    test('should retunr 100 when setting 100 as parameter', () => {
        const {result} = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    })
    test('should return counter+1', () => {
        const {result} = renderHook(() => useCounter(100));
        const b4increment = result.current.counter;
        const {increment} = result.current;
        act(() => increment());
        expect(result.current.counter).toBe(b4increment+1);
    })
    test('should return counter+1', () => {
        const {result} = renderHook(() => useCounter(100));
        const b4decrement = result.current.counter;
        const {decrement} = result.current;
        act(() => decrement());
        expect(result.current.counter).toBe(b4decrement-1);
    })
    test('should return 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const b4reset = result.current.counter;
        const {reset, increment} = result.current;
        act(() => {
            increment(); 
            reset();
        });
        expect(result.current.counter).toBe(b4reset);
    })
})
