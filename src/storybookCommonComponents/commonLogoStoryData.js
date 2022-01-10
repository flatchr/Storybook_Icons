import { theme } from '@flatchr/system-design'

const logoStoryData = {
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
    event: {
      description: "Event to customize Paul",
      control: {
        type: "select",
      },
      options: ['prideMonth', 'saintPatrick'],
      table: {
        defaultValue: {
          summary: null,
        },
        type: { summary: "text" },
      },
    },
  },
};

export default logoStoryData;