import { HalladayPage } from './app.po';

describe('halladay App', function() {
  let page: HalladayPage;

  beforeEach(() => {
    page = new HalladayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
