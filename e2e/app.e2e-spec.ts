import { ANGULARTOUROFHEROESPage } from './app.po';

describe('angular-tour-of-heroes App', function() {
  let page: ANGULARTOUROFHEROESPage;

  beforeEach(() => {
    page = new ANGULARTOUROFHEROESPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
