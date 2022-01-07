import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';



describe('Testing GifExpertApp', () => {
    test('should match snapshot', () => {

       const wrapper =  shallow(<GifExpertApp/>)
       expect(wrapper).toMatchSnapshot();

    });

    test('should show "categories.length" GifGrid components', () => {
       
        const categories = ['one punch man', 'Dragon ball z'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    
    
})
