const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:80', // ou a URL do seu sistema
    setupNodeEvents(on, config) {
      // event listeners se necessário
    },
    supportFile: 'UI/cypress/support/e2e.js',
    specPattern: 'UI/cypress/e2e/**/*.cy.js'
  }
})

