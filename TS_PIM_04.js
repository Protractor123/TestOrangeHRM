/*Add new Employee under PIM, Employee list */

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
    element(by.id('menu_pim_viewPimModule')).click(); //clicks the PIM Tab
	browser.sleep(1000);
	element(by.id('menu_pim_addEmployee')).click(); // clicks the addemployee Tab
	browser.sleep(1000);
	element(by.id('firstName')).sendKeys('TestEmployee1'); // enters value in first name field
	element(by.id('lastName')).sendKeys('Add'); // enters value in last name field
	element(by.id('btnSave')).click();	// saves the info
	browser.sleep(5000);
  });
});