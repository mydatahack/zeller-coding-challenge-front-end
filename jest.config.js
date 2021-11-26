module.exports = {
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.(tsx|ts|js)?$": "ts-jest"
  },


  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "./setup.ts"

    // Todo: fix the validation error when adding this
    // Module @testing-library/react/cleanup-after-each in the setupFilesAfterEnv option was not found.
    // <rootDir> is: C:\Users\takah\Projects\whosfree-fed\react
    // '@testing-library/react/cleanup-after-each'
  ],

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
