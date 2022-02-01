
import Page from './page';

class SAPage extends Page {
  /**
  * define elements
  */
  get searchInput()   { return $('//*/input[@data-testid="search-input-field"]'); }
  get searchButton()  { return $('//*/div[@data-testid="search-icon"]/img'); }
  get resultsList()   { return $('//*/h2[@data-testid="course-title"]'); }

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://skillacademy.com/')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    
    browser.pause(1000);
  }

  search () {
    this.searchButton.click();
  }

  isSearched () {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.getText();
  }

}

export default new SAPage();
