const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: "5u3kyw",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://example.cypress.io',
    baseUrl: 'https://example.cypress.io',
    env: {
      logoText: 'cypress.io',
    },
  },
});
