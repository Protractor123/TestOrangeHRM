exports.config = {
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
  'browserName': 'chrome',
},
  // Framework to use
  framework: 'jasmine',
  
  // protractor is called.
  specs: [
   'TS_PIM_01.js',
   'TS_PIM_02.js',
   'TS_PIM_03.js',
   'TS_PIM_04.js',
   'TS_PIM_05.js',
   'TS_PIM_06.js'  
  ],
  allScriptsTimeout: 50000
};