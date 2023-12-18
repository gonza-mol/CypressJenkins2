const { defineConfig } = require ("cypress")

module.exports = defineConfig({
  reporter: "mochawesome", 
  reporterOptions: {
    reportDir: "reports",
    reportFilename: "My_new_report",
    json: true,
    html: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
