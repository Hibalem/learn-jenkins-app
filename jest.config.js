module.exports = {
  // Other Jest options (e.g., testEnvironment: 'jsdom' for browser tests)
  reporters: [
    'default',  // Keeps console output for debugging
    ['jest-junit', {
      outputDirectory: 'jest-results',  // Creates this directory
      outputName: 'junit.xml'           // The exact filename
    }]
  ]
};