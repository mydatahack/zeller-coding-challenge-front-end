module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(tsx|ts|js)?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "./setup.ts"
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
