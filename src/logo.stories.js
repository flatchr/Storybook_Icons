import React from 'react';
import { theme } from '@flatchr/system-design';
import LogoFlatchr from './icons/Flatchr';
import logoStoryData from './storybookCommonComponents/commonLogoStoryData';

const logo = {
  title: "Logo",
  ...logoStoryData,
};

export default logo;

const Default = args => <LogoFlatchr {...args} />;
Default.storyName = 'Full Logo';

const TextColored = args => (
  <LogoFlatchr
    {...args}
    textColor={theme.colors.textSecondary}
  />
);
TextColored.storyName = 'Full Logo colored text';

const OnlyPaulStory = args => (
  <LogoFlatchr
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
