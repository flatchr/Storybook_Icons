import React from "react";
import AllIcons from '.';

const allIcons = {
  title: "All icons",
  args: {
    color: "#231F20",
  },
  parameters: {
    options: { showPanel: false },
    controls: { disabled: true },
    actions: { disabled: true },
    docs: {
      page: null,
    },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
};

export default allIcons;

const Default = args => <AllIcons {...args} />;
Default.storyName = 'All icons';

export {
  Default,
};
