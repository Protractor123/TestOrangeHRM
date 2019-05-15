/*Check if the user can upload a picture format (jpg, png, gif ) */

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
	element(by.id('menu_pim_viewEmployeeList')).click(); //clicks the Employee list
	browser.sleep(1000);
	var employeeid = $('[href*="/index.php/pim/viewEmployee/empNumber/1"]');  // click the emp id
    employeeid.click();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs("https://opensource-demo.orangehrmlive.com/index.php/pim/viewEmployee/empNumber/1"),5000);
	element(by.id('empPic')).click();
	var imagePath = 'C:\\Users\\A678895\\Desktop\\testimage.jpg'; // picks the file from user local disk
    element(by.id('photofile')).sendKeys(imagePath); // upload the image in the portal 
	browser.sleep(3000);
	element(by.id('btnSave')).click();
	browser.sleep(3000);
	 });
});