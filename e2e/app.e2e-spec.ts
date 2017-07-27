import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display ons-navigator', async () => {
    page.navigateTo();
    const navi = await page.getOnsNavigator();
    await expect(navi).toBe(true);
  });

  it('should display page1 title', async () => {
    const text = await page.getPage1TitleText();
    await expect(text).toEqual('Page 1');
  });

  it('should display page1 message', async () => {
    const text = await page.getPage1ParagraphText();
    await expect(text).toEqual('This is the first page.');
  });

  it('should push and display page2 title', async () => {
    page.getPage1Button().click();
    browser.sleep(1000);
    const text = await page.getPage2TitleText();
    await expect(text).toEqual('Page 2');
  });

  it('should display page2 message', async () => {
    const text = await page.getPage2ParagraphText();
    await expect(text).toEqual('This is the second page.');
  });

  it('should pop and display page1 title', async () => {
    page.getPage2Button().click();
    browser.sleep(1000);
    const text = await page.getPage1TitleText();
    await expect(text).toEqual('Page 1');
  });

});
