const configs = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.+(ts|js)", "**/?(*.)+test.+(ts|js)"],
  collectCoverageFrom: ["src/functions/*.+(ts|js)"],
};

module.exports = configs;
