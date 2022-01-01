export const parameters = {
  options: {
    storySort: {
      order: [
        'Logo',
        'All icons',
        'Icons',
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