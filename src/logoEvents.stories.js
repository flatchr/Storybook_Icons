import React from "react";

import LogoFlatchr from "./icons/Flatchr";
import logoStoryData from "./storybookCommonComponents/commonLogoStoryData";

const logoEvents = {
  title: "Logo/Events",
  ...logoStoryData,
};

export default logoEvents;

const PaulPrideMonthStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="prideMonth" />
);
PaulPrideMonthStory.storyName = "Pride Month";

const PaulSaintValentineStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="saintValentine" />
);
PaulSaintValentineStory.storyName = `Valentine's Day`;

const PaulSaintPatrickStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="saintPatrick" />
);
PaulSaintPatrickStory.storyName = "Saint Patrick";

const PaulEasterEggStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="easter" />
);
PaulEasterEggStory.storyName = "Easter";

const PaulSpringStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="spring" />
);
PaulSpringStory.storyName = "Spring";

const PaulSummerStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="summer" />
);
PaulSummerStory.storyName = "Summer";

const PaulFrenchFlagStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="frenchNationalDay" />
);
PaulFrenchFlagStory.storyName = "French National Day";

const PaulMusicStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="frenchMusicDay" />
);
PaulMusicStory.storyName = "French Music Day";

const PaulHalloweenStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="halloween" />
);
PaulHalloweenStory.storyName = "Halloween";

const PaulPinkOctoberStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="pinkOctober" />
);
PaulPinkOctoberStory.storyName = "PinkOctober";

const PaulMovemberStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="movember" />
);
PaulMovemberStory.storyName = "Movember";

const PaulNewYearDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="newYearDay" />
);
PaulNewYearDayStory.storyName = "New Year Day";

const PaulEpiphanyStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="epiphany" />
);
PaulEpiphanyStory.storyName = "Epiphany";

const PaulCandlemasStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="candlemas" />
);
PaulCandlemasStory.storyName = "Candlemas";

const PaulCancerDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="cancerDay" />
);
PaulCancerDayStory.storyName = "Cancer Day";

const PaulShroveTuesdayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="shroveTuesday" />
);
PaulShroveTuesdayStory.storyName = "Shrove Tuesday";

const PaulAprilFoolDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="aprilFoolDay" />
);
PaulAprilFoolDayStory.storyName = "April Fool Day";

const PaulWorkersDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="workersDay" />
);
PaulWorkersDayStory.storyName = "Workers Day";

const PaulEuropeanDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="europeanDay" />
);
PaulEuropeanDayStory.storyName = "European Day";

const PaulRolandGarrosStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="rolandGarros" />
);
PaulRolandGarrosStory.storyName = "Roland Garros";

const PaulWorldBloodDonorDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="worldBloodDonorDay" />
);
PaulWorldBloodDonorDayStory.storyName = "World Blood Donor Day";

const PaulHolidaysStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="holidays" />
);
PaulHolidaysStory.storyName = "Holidays";

const PaulBackToSchoolStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="backToSchool" />
);
PaulBackToSchoolStory.storyName = "Back To School";

const PaulAutumnStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="autumn" />
);
PaulAutumnStory.storyName = "Autumn";

const PaulSpanishNationalDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="spanishNationalDay" />
);
PaulSpanishNationalDayStory.storyName = "Spanish National Day";

const PaulArmisticeStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="armistice" />
);
PaulArmisticeStory.storyName = "Armistice";

const PaulWinterStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="winter" />
);
PaulWinterStory.storyName = "Winter";

const PaulChristmasSweaterDayStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="christmasSweaterDay" />
);
PaulChristmasSweaterDayStory.storyName = "Christmas Sweater Day";

const PaulChristmasStory = (args) => (
  <LogoFlatchr {...args} onlyPaul event="christmas" />
);
PaulChristmasStory.storyName = "Christmas";

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
  PaulPinkOctoberStory,
  PaulMovemberStory,
  PaulNewYearDayStory,
  PaulEpiphanyStory,
  PaulCandlemasStory,
  PaulCancerDayStory,
  PaulShroveTuesdayStory,
  PaulAprilFoolDayStory,
  PaulWorkersDayStory,
  PaulEuropeanDayStory,
  PaulRolandGarrosStory,
  PaulWorldBloodDonorDayStory,
  PaulHolidaysStory,
  PaulBackToSchoolStory,
  PaulAutumnStory,
  PaulSpanishNationalDayStory,
  PaulArmisticeStory,
  PaulWinterStory,
  PaulChristmasSweaterDayStory,
  PaulChristmasStory
};
