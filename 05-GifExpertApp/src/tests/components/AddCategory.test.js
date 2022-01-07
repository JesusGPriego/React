import { shallow } from "enzyme"
import {AddCategory} from '../../components/AddCategory';

describe('Testing AddCategory Component', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)
   
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('should return AddCategory snapshot', () => {
         expect(wrapper).toMatchSnapshot();
    })
    
    test('should update the input box', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target :{value : value}});
        expect(wrapper.find('p').text().trim()).toBe(value);

    })

    test('should not post info on submit', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should call setCategoies and clean the input box.', () => {
        
        //1. simulate input change
        let input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target :{value : value}});
        input = wrapper.find('input');
        console.log('valud after simulating change: ',input.prop('value'));
        //2. simulate form submit.
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        //3. setCategories should have been called 1 time.
        expect(setCategories).toHaveBeenCalled();
        //4. input value should be empty.
        input = wrapper.find('input');
        console.log('value after simulating submit: ',input.prop('value'));
        expect(input.prop('value')).toBe('');
    })
    

})
