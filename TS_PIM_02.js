/*Check if the user is able to see the “General Information” in organization tab under admin on logging in the first time*/

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
    element(by.id('menu_admin_viewAdminModule')).click();// clicks the Admin tab
	browser.sleep(2000);
	element(by.id('menu_admin_Organization')).click();// clicks the Organization tab under admin
	browser.sleep(2000);
	element(by.id('menu_admin_viewOrganizationGeneralInformation')).click(); // clicks the General Information tab under admin
	browser.sleep(5000);
  });
});