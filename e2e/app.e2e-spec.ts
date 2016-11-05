import { AlquilerPeliculasPage } from './app.po';

describe('alquiler-peliculas App', function() {
  let page: AlquilerPeliculasPage;

  beforeEach(() => {
    page = new AlquilerPeliculasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
