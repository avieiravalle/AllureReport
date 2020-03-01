//npm i jasmine-allure-reporter
//npm install allure-commandline --save-dev


exports.config = {
   // directConnect: true,
    specs: ['todo.js'],
  
    framework: 'jasmine2',
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    },highlightDelay: 500
  }