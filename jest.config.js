module.exports = {
    moduleFileExtensions: [
      'js',
      'json',
    ],
    rootDir: '.',
    collectCoverageFrom: [
      '**/*.(js)',
    ],
    testEnvironment: 'node',
    coverageReporters: ['lcovonly', 'html', 'clover'],
  };