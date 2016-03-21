module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'mocha',
            'chai',
            'sinon'
        ],


        // list of files / patterns to load in the browser  'app/app.states.js',
        files: [
            'lib/angular.js',
            'lib/angular-mocks.js',
            'lib/angular-animate.js',
            'main/modules.js',
            'lib/angular-route.min.js',
            'lib/ui-bootstrap-tpls-1.1.2.js',           
            'routing.js',
            'services/commonService.js',
            'views/registerAccount/registerAccount.js',
            'views/login/login.js',
            'views/modifyAccount/modifyAccount.js',
            'views/deleteAccount/deleteAccount.js',
            'views/accountBalance/accountBalance.js',
            'tests/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'scripts/**/*.js': 'coverage'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
