import { AnalyticsPage } from './app.po';

describe('analytics App', () => {
  let page: AnalyticsPage;

  beforeEach(() => {
    page = new AnalyticsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
