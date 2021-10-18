import React from "react";

// Import icons
import FlatchrIcon from './icons/Flatchr';
import HeadIcon from './icons/Head';
import HomeIcon from "./icons/Home";

const iconography = {
  title: "Iconography",
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

export default iconography;

const FlatchrIconStory = args => <FlatchrIcon {...args} />;
FlatchrIconStory.storyName = 'Flatchr';

const HeadIconStory = args => <HeadIcon {...args} />;
HeadIconStory.storyName = 'Head';

const HomeIconStory = args => <HomeIcon {...args} />;
HomeIconStory.storyName = 'Home';

// ⚠️ PLEASE KEEP IN ALPHABETICAL ORDER ⚠️
export {
  FlatchrIconStory,
  HeadIconStory,
  HomeIconStory,
};
