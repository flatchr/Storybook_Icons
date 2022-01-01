import React from "react";

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
    color: "#989898",
  },
};

export default logo;

const Default = args => <LogoFlatchr {...args} />;
Default.storyName = 'Full Logo';

const TextColored = args => (
  <LogoFlatchr
    {...args}
    color="#01aec8"
    textColor="black"
  />
);
TextColored.storyName = 'Full Logo colored text';

const OnlyPaulStory = args => (
  <LogoFlatchr
    {...args}
    color="#01aec8"
    onlyPaul
  />
);
OnlyPaulStory.storyName = 'Only Paul';

export {
  Default,
  TextColored,
  OnlyPaulStory,
};
