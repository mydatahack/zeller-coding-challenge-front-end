export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        'Welcome', ['Introduction'],
        'Examples', ['Atoms', 'Molecules', 'Forms', 'Global']
      ],
    },
  }
}
      