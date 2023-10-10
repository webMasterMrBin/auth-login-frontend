/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^src/shared$': '<rootDir>/src/shared',
    '^src/features$': '<rootDir>/src/features',
    '^src/features/product$': '<rootDir>/src/features/product',
    '^src/widgets$': '<rootDir>/src/widgets',
    '^src/pages$': '<rootDir>/src/pages',
    '@/utils': '<rootDir>/node_modules/@alife/dt-oui/dist/utils/index.js',
    'Mocks/matchMedia': '<rootDir>/Mocks/matchMedia.js',
    '^Mocks$': '<rootDir>/Mocks/index.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./jest.setup.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

module.exports = config;
