import { WeedMenuClientNewPage } from './app.po';

describe('weed-menu-client-new App', () => {
  let page: WeedMenuClientNewPage;

  beforeEach(() => {
    page = new WeedMenuClientNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
