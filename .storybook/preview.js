import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";
import { theme } from '@flatchr/system-design';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {Object.values(theme.fonts).map(font => {
          return (
            <link
              href={font.import}
              rel="stylesheet"
            />
          );
        })}
      </Helmet>
      <Story />
    </ThemeProvider>
  ),
];
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