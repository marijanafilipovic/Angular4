import { FirstAng2Page } from './app.po';

describe('first-ang2 App', () => {
  let page: FirstAng2Page;

  beforeEach(() => {
    page = new FirstAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
