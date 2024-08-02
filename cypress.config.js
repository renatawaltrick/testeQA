const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 50000,
    responseTimeout: 50000,
    requestTimeout: 50000,
    waitForAnimations: true,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true, 
    env: {
      "TAGS": "not @ignore",
      "NODE_TLS_REJECT_UNAUTHORIZED": 0
    },
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    projectId: "3752no", 
    parallel: true, 
    record: true, 
    group: true 
  }
});