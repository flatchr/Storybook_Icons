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

const PaulSpringStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="spring"
  />
);
PaulSpringStory.storyName = 'Spring';

const PaulSummerStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="summer"
  />
);
PaulSummerStory.storyName = 'Summer';

const PaulFrenchFlagStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="frenchNationalDay"
  />
);
PaulFrenchFlagStory.storyName = 'French National Day';

const PaulMusicStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="frenchMusicDay"
  />
);
PaulMusicStory.storyName = 'French Music Day';

const PaulHalloweenStory = args => (
  <LogoFlatchr
    {...args}
    onlyPaul
    event="halloween"
  />
);
PaulHalloweenStory.storyName = 'Halloween';

export {
  PaulPrideMonthStory,
  PaulSaintPatrickStory,
  PaulSaintValentineStory,
  PaulEasterEggStory,
  PaulSpringStory,
  PaulSummerStory,
  PaulFrenchFlagStory,
  PaulMusicStory,
  PaulHalloweenStory,
};
