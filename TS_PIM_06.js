/*"Goto Dashboard 1Mouse over on Employee Distribution by subunit graph" */

describe('Orange HRM Testing ', function() {
	var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  it('Open the portal', function() {
	browser.ignoreSynchronization = true;
   	element(by.id('menu_dashboard_index')).click();
	browser.sleep(5000);
	browser.actions().mouseMove(element(by.id("panel_resizable_1_0"))).perform(); // action to perform mouse hover 
	expect(element(by.id("panel_resizable_1_0")).isDisplayed()).toBeTruthy(); // checks the above action to be true
	browser.sleep(5000);
	});
});