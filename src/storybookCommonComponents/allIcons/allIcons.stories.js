import React from 'react';
import { theme } from '@flatchr/system-design';
import AllIcons from '.';

const allIcons = {
  title: "Iconography/All",
  args: {
    color: theme.colors.textPrimary,
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
Default.storyName = 'All';

export {
  Default,
};
