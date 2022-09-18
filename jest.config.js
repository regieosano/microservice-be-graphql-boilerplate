module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
	setupFilesAfterEnv: ['<rootDir>/src/__tests__/__mocks__/prismaMock.ts'],
  moduleDirectories: ['src', 'node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/src/__tests__/__mocks__/'],
};
