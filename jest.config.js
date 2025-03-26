module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/tests/",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
