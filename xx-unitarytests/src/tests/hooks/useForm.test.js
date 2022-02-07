import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Testing useForm customHook', () => {


    const initialState = {
        name:'Jesús',
        email: 'suleware@gmail.com',
    };

    test('should return default form ',() => {

        const {result} = renderHook(() => useForm(initialState));
        const [values] = result.current;
        expect(values).toEqual(initialState);


    });

    test('should change form name value', () => {
        const {result} = renderHook(() => useForm(initialState));
        const [values, handleInputChange] = result.current;
        // console.log(values.name);
        act(() => {
            handleInputChange({
                target: {
                    name:'name',
                    value: 'testing',
                },
            })
        });
        // console.log(result.current[0].name);
        expect(values.name).not.toEqual(result.current[0].name);
    });

    test('should reset the form to initalState', () => {
        const {result} = renderHook(() => useForm(initialState));
        const [, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name:'name',
                    value: 'testing',
                },
            });
            reset();
        });      

        const[values] = result.current;
        expect(values).toEqual(initialState);

    });


})