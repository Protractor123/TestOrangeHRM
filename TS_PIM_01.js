/*Check if the user is able to enter the Orange HRM system with a successful ESS-User account.*/

describe('Orange HRM Testing ', function() {
	var originalTimeout; // code to set  timeout before and after a function
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  it('Open the portal', function() {
	browser.ignoreSynchronization = true;
    browser.get('https://opensource-demo.orangehrmlive.com/'); // Opens up the browser 
    element(by.id('txtUsername')).sendKeys('Admin');// inputs data in username field
    element(by.id('txtPassword')).sendKeys('admin123'); // inputs data in password field
    element(by.id('btnLogin')).click();  // clicks login button
	browser.sleep(5000); // waits for 5000ms to view the open browser
	});
});