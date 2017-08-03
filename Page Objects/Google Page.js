module.export = GooglePage = function() {
  var searchBar = element(by.id('lst-ib'));
  var searchButton = element(by.css("input[value='Google Search']"));

  this.getPage = function() {
    browser.waitForAngularEnabled(false); //<- use if testing non angular pages
    browser.get('https://www.google.com');
  };

  this.enterSearch = function(search) {
    searchBar.clear();
    searchBar.sendKeys(search);
  };

  this.clickSearchButton = function() {
    searchButton.click();
  };

};