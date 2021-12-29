import React from "react";
// Icons import
import PeopleIcon from './icons/People';
import ErrorIcon from './icons/Error';

const icons = {
  title: "Iconography/Icons",
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
  },
  args: {
    color: "#231F20",
  },
};

export default icons;

const PeopleIconStory = args => <PeopleIcon {...args} />;
PeopleIconStory.storyName = 'People';

const ErrorIconStory = args => <ErrorIcon {...args} />;
ErrorIconStory.storyName = 'Error';

// ⚠️ PLEASE KEEP IN ALPHABETICAL ORDER ⚠️
export {
  ErrorIconStory,
  PeopleIconStory,
};
