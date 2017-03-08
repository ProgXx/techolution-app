import { CarappTecholutionPage } from './app.po';

describe('carapp-techolution App', () => {
  let page: CarappTecholutionPage;

  beforeEach(() => {
    page = new CarappTecholutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
