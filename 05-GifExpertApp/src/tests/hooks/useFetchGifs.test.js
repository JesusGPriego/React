import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'
describe('Testing custom hook useFetchGifs', () => {
    
    test('should resturn initial state', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('one punch man'))
        const {data, loading} =result.current;
        // const {data, loading} = useFetchGifs('one punch man');
        // console.log(data, loading);
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    
    });

    test('should return an array of gif object and loading as false', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('one punch man'))
        await waitForNextUpdate();
        const {data, loading} =result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
    
    

})
