import { shallow } from "enzyme"
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid Component', () => {


    const category = 'One Punch Man'
    
    test('should return a GifGrid that match the snapshot.', () => {  

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()

    })
    

    test('should show item when images are loaded with "useFetchGifs"', () => {
        
        const gifs = [
            {
                id:'abc',
                url:'https://myimage.jpg',
                title: 'whatever title',
            }
        ]
        //faking data loaded:
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false,
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
        //no loading p should exist after data is loaded:
        expect(wrapper.find('p').exists()).toBe(false);
        //asserting that there is the same gifgriditems as gifs item:
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    

})
