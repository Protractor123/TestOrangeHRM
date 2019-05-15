// Used only mobiledata field to be entered 
/*Check if the user is able to edit the fields other than the following and save changes in Contact details
 • Country 
 • Street 1
 • Street 2
 • City/Town
 • State/Province
 • ZIP Code
 • Telephone
 • Email*/

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
    element(by.id('menu_pim_viewPimModule')).click(); // clicks the PIM Tab
	browser.sleep(1000);
	element(by.id('menu_pim_viewEmployeeList')).click(); // clicks the employee list under PIM tab
	browser.sleep(1000);
	var employeeid = $('[href*="/index.php/pim/viewEmployee/empNumber/1"]');  // choose the employee at this href and clicks on next line
    employeeid.click();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs("https://opensource-demo.orangehrmlive.com/index.php/pim/viewEmployee/empNumber/1"),5000); //checks and wait for condition to be true
	var contactDetails = $('[href*="/index.php/pim/contactDetails/empNumber/1"]');  // choose and clicks the contact details
    contactDetails.click();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs("https://opensource-demo.orangehrmlive.com/index.php/pim/contactDetails/empNumber/1"),5000); //checks and wait for condition to be true
	element(by.id('btnSave')).click(); // clicks the button
	element(by.id('contact_emp_mobile')).clear(); // clears the data if already present
	element(by.id('contact_emp_mobile')).sendKeys('+6340012345'); //sends the mobile data to emp mobile field, 
	element(by.id('btnSave')).click();
	browser.sleep(5000);
  });
});