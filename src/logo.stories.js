import React from "react";
import { theme } from '@flatchr/system-design'
// Import icons
import LogoFlatchr from './icons/Flatchr';

const logo = {
  title: "Logo",
  parameters: {
    options: { showPanel: true },
  },
  argTypes: {
    width: {
      description: "Width (in px) of the icon",
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "number" },
      },
    },
    height: {
      description: "Height (in px) of the icon",
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "number" },
      },
    },
    color: {
      description: "Main color of the icon",
      control: {
        type: "color",
      },
      table: {
        defaultValue: {
          summary: '#231F20',
        },
        type: { summary: "text" },
      },
    },
    onlyPaul: {
      defaultValue: false,
      description: "Just show Paul Le poulpe",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: { summary: "boolean" },
      },
    },
    textColor: {
      description: "Let's colorize Flatchr",
      control: {
        type: "color",
      },
      table: {
        defaultValue: {
          summary: '#231F20',
        },
        type: { summary: "text" },
      },
    },
  },
  args: {
    color: theme.colors.textPrimary,
  },
};

export default logo;

const Default = args => <LogoFlatchr {...args} />;
Default.storyName = 'Full Logo';

const TextColored = args => (
  <LogoFlatchr
    {...args}
    color={theme.colors.primary400}
    textColor={theme.colors.specialPrimary}
  />
);
TextColored.storyName = 'Full Logo colored text';

const OnlyPaulStory = args => (
  <LogoFlatchr
    {...args}
    color={theme.colors.primary400}
    onlyPaul
  />
);
OnlyPaulStory.storyName = 'Only Paul';

export {
  Default,
  TextColored,
  OnlyPaulStory,
};
