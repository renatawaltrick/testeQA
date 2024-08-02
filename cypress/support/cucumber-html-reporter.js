var reporter = require('cucumber-html-reporter');
var options = {

        theme: ‘bootstrap’,

        jsonFile: ‘./path-to-your-json-output/’,

        output: ‘./path-where-the-report-needs-to-be/’,

        reportSuiteAsScenarios: true,

        scenarioTimestamp: true,

        launchReport: true,

        metadata: {

            “App Version”:”0.3.2″,

            “Test Environment”: “STAGING”,

            “Browser”: “Chrome  99.0.4844.51”,

            “Platform”: “Windows 10”,

            “Parallel”: “Scenarios”,

            “Executed”: “Remote”

        }

    };

    reporter.generate(options);