import { Ng2PhonegapPage } from './app.po';

describe('ng2-phonegap App', () => {
  let page: Ng2PhonegapPage;

  beforeEach(() => {
    page = new Ng2PhonegapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
