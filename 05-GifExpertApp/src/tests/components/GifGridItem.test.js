import { shallow } from "enzyme";
import {GifGridItem} from '../../components/GifGridItem'


describe('Testing GifGridItem', () => {
    
    const title = 'title';
    const url = 'https://localhost.algo.jpg';
    let wrapper  = shallow(<GifGridItem title={title} url={url}/>)
    

    test('should return GfiGridItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should return a <p></p> displayin the title', () => {
        const figcaption = wrapper.find('figcaption');
        expect(figcaption.text().trim()).toBe(title);
    })

    test('should get img=url and alt = title', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })
    
    test('should include animate__fadeIn classnName', () => {
        
        const div = wrapper.find('figure');
        expect(div.prop('className')).toContain('animate__fadeIn');

    })
    

})
