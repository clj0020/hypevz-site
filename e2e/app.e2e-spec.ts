import { HypeVzPage } from './app.po';

describe('hype-vz App', () => {
  let page: HypeVzPage;

  beforeEach(() => {
    page = new HypeVzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
