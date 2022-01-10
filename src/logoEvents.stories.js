import React from "react";

import LogoFlatchr from './icons/Flatchr';
import logoStoryData from './storybookCommonComponents/commonLogoStoryData';

const logoEvents = {
  title: "Logo/Events",
  ...logoStoryData,
};

export default logoEvents;

const PaulPrideMonthStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="prideMonth"
  />
);
PaulPrideMonthStory.storyName = 'Pride Month';

const PaulSaintPatrickStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="saintPatrick"
  />
);
PaulSaintPatrickStory.storyName = 'Saint Patrick';

export {
  PaulPrideMonthStory,
  PaulSaintPatrickStory,
};
