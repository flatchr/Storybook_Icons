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

const PaulSaintValentineStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="saintValentine"
  />
);
PaulSaintValentineStory.storyName = `Valentine's Day`;

const PaulSaintPatrickStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="saintPatrick"
  />
);
PaulSaintPatrickStory.storyName = 'Saint Patrick';

const PaulEasterEggStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="easter"
  />
);
PaulEasterEggStory.storyName = 'Easter';

export {
  PaulPrideMonthStory,
  PaulSaintPatrickStory,
  PaulSaintValentineStory,
  PaulEasterEggStory,
};
