const { defineConfig } = require ("cypress")

module.exports = defineConfig({
  reporter: "mochawesome", 
  reporterOptions: {
    reportDir: "reports",
    reportFilename: "My_new_report",
    json: true,
    html: true
  },
  "env": {
    "grepFilterSpecs": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
