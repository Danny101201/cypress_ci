const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: "5u3kyw",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://example.cypress.io',
    baseUrl: process.env.NODE_ENV === 'production' ?'https://example.cypress.io': 'http://localhost:8080',
    env: {
      logoText: 'cypress.io',
    },
  },
});
