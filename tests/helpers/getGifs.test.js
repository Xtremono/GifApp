import { getGifs } from "../../src/helpers/getGifts"


describe('pruebas en getGifs()', () => {
  test('debe de retornar un arreglo de gifts', () => {

    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({id: expect.any(String), title: expect.any(String), url: expect.any(String)})
  })


})
