export const parameters = {
  options: {
    storySort: {
      order: [
        'Iconography', ['Logo', 'Icons']
      ],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}