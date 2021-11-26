module.exports = {
  transform: {
    "^.+\\.(tsx|ts)?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "./setup.ts"
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
