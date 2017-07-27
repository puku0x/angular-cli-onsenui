import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getOnsNavigator() {
    return element(by.css('ons-navigator')).isDisplayed();
  }

  getPage1() {
    return element(by.css('ons-page[page1]'));
  }

  getPage1TitleText() {
    return element(by.css('ons-page[page1] ons-toolbar div.center')).getText();
  }

  getPage1ParagraphText() {
    return element(by.css('ons-page[page1] p')).getText();
  }

  getPage1Button() {
    return element(by.css('ons-page[page1] ons-button'));
  }

  getPage2TitleText() {
    return element(by.css('ons-page[page2] ons-toolbar div.center')).getText();
  }

  getPage2ParagraphText() {
    return element(by.css('ons-page[page2] p')).getText();
  }

  getPage2Button() {
    return element(by.css('ons-page[page2] ons-button'));
  }

  getPage2BackButton() {
    return element(by.css('ons-page[page2] ons-back-button')).get();
  }

}
