import React from "react";

// Import icons
import FlatchrIcon from './icons/Flatchr';

const logo = {
  title: "Iconography/Logo",
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
    color: "#231F20",
  },
};

export default logo;

const Default = args => <FlatchrIcon {...args} />;
Default.storyName = 'Full Logo';

const TextColored = args => (
  <FlatchrIcon
    {...args}
    textColor="red"
  />
);
TextColored.storyName = 'Full Logo colored text';

const OnlyPaulStory = args => (
  <FlatchrIcon
    {...args}
    onlyPaul
  />
);
OnlyPaulStory.storyName = 'Only Paul';

export {
  Default,
  TextColored,
  OnlyPaulStory,
};
