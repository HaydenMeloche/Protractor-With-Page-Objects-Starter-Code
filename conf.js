exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['spec.js'],
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
    //'args': ['show-fps-counter=true']
    'args':["start-maximized"]
    //'args': [ "--headless", "--disable-gpu", "--window-size=100x100" ]
    }

  },

  // Suite names can be listed here along with which JS files are called
  // provide name then path to .js file(s)
  suites: {
    searchTest: 'E2E Tests/Google/*.js'
  },

  resultJsonOutputFile:'./results/latestTestResults.json', //outputs JSON report.

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};