const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1050,
  env: {
    exh1: "/slavery-and-freedom",
    exh1P1: "/slavery-and-the-making-of-the-atlantic-world",
    exh4: "millie-christine",
    exh5: "afrofuturism",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
     setupNodeEvents(on, config) {
       return require("./cypress/plugins")(on, config);
     },
    baseUrl: "https://www.va.gov/",
    numTestsKeptInMemory: 10,
  },
  retries: {
    runMode: 2,
  },
});
