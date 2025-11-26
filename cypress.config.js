const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,  // ← AGREGA ESTA LÍNEA
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})