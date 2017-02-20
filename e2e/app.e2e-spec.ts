import { SmiteCheatSheetPage } from './app.po';

describe('smite-cheat-sheet App', () => {
  let page: SmiteCheatSheetPage;

  beforeEach(() => {
    page = new SmiteCheatSheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
