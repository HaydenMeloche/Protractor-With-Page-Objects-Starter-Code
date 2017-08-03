describe('On Google', function() {
  it('Search sucessfully', function() {
    require('../../Page Objects/Google Page.js');
    var page = new GooglePage();
    page.getPage();
	page.enterSearch("example search test");
	page.clickSearchButton();
    
    expect(browser.getTitle()).toContain('example search test');
  });
});