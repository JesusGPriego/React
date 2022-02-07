import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import {useFetch} from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');
describe('Testing MultipleCustomHooks component', () => {
  
     beforeEach( () =>  {

        useCounter.mockReturnValue({
                counter: 10,
                increment: () => {}
            });

    });
    
    test('should match snapshot', () => {

        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null,
        });
        const wrapper = shallow(<MultipleCustomHooks/>)
        expect(wrapper).toMatchSnapshot();
    });


    test('should return info', () => {
     
        useFetch.mockReturnValue({
            data:[{author:'Jesús',quote:'sample quote'}],
            loading:false,
            error:null,
        });
        const wrapper = shallow(<MultipleCustomHooks/>)
        // console.log(wrapper.html());
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('sample quote');
        expect(wrapper.find('footer').text().trim()).toBe('Jesús');
    });
    

});
