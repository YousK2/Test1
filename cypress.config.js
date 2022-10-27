///<reference types="cypress-iframe" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalStudio: true,
    specPattern: ["**/frames.cy.js", "**/abn.js"],
    setupNodeEvents(on, config) {
            
      
      // implement node event listeners here
    },
  },
});
