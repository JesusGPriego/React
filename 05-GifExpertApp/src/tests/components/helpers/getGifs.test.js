import { getGifs } from "../../../helpers/getGifs"


describe('Testing getGifs helper.', () => {
    

    test('should return 10 elements', async () => {
        
        const gifs = await getGifs('One punch man');
        expect(gifs.length).toBe(10);

    }, 10000);
    
    test('should return 0 elements', async () => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    }, 10000);

})
