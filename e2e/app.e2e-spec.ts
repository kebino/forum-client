import { ForumClientPage } from './app.po';

describe('forum-client App', () => {
  let page: ForumClientPage;

  beforeEach(() => {
    page = new ForumClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
