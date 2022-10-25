const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents() {},
    specPattern: "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",
    excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*"],
    baseUrl: "http://localhost:3000",
  },
});
