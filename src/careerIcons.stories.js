import React from "react";
// Icons import
import ThumbsUpIcon from './icons/ThumbsUp';
import TrophyIcon from './icons/Trophy';
import MapSignsIcon from "./icons/MapSigns";
import BriefCaseIcon from './icons/BriefCase';
import SmileIcon from './icons/Smile';
import SmileGrinHeartsIcon from './icons/SmileGrinHearts';
import BinocularsIcon from './icons/Binoculars';
import ToolsIcon from './icons/Tools';
import CompassIcon from './icons/Compass';
import MoutainIcon from './icons/Moutain';
import CalculatorIcon from './icons/Calculator';
import HandHoldingHeartIcon from './icons/HandHoldingHeart';
import SmileWinkIcon from './icons/SmileWink';
import BoltIcon from './icons/Bolt';
import OctopussDeployIcon from './icons/OctopussDeploy';
import BatteryThreeQuartersIcon from './icons/BatteryThreeQuarters';
import DumbbellIcon from './icons/Dumbbell';
import CreditCardIcon from './icons/CreditCard';
import PauseIcon from './icons/Pause';
import PlayIcon from './icons/Play';
import ShoppingCartIcon from './icons/ShoppingCart';
import ShieldCheckmarkIcon from './icons/ShieldCheckmark';
import InfoCircleIcon from './icons/InfoCircle';
import CheckCircleIcon from './icons/CheckCircle';
import EyeIcon from './icons/Eye';
import EnvelopeIcon from './icons/Envelope';
import PeopleIcon from "./icons/People";
import StarIcon from './icons/Star';
import CalendarIcon from "./icons/Calendar";
import UniversityIcon from "./icons/University";
import PhoneIcon from "./icons/Phone";
import PenIcon from "./icons/Pen";
import ChatBubblesIcon from './icons/ChatBubbles';
import RegDotCircleIcon from "./icons/RegDotCircle";
import TagsIcon from './icons/Tags';
import DonutIcon from "./icons/Donut";
import ArrowRepeatIcon from "./icons/ArrowRepeat";

const icons = {
  title: "Iconography/Career",
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
  },
};

export default icons;

const ThumbsUpIconStory = args => (
  <ThumbsUpIcon {...args} />
);
ThumbsUpIconStory.storyName = 'Thumbs Up';

const TrophyIconStory = args => (
  <TrophyIcon {...args} />
);
TrophyIconStory.storyName = 'Trophy';

const MapSignsIconStory = args => (
  <MapSignsIcon {...args} />
);
MapSignsIconStory.storyName = 'Map Signs';

const BriefCaseIconStory = args => (
  <BriefCaseIcon {...args} />
);
BriefCaseIconStory.storyName = 'Brief Case';

const SmileIconStory = args => (
  <SmileIcon {...args} />
);
SmileIconStory.storyName = 'Smile';

const SmileGrinHeartsIconStory = args => (
  <SmileGrinHeartsIcon {...args} />
);
SmileGrinHeartsIconStory.storyName = 'Smile Grin Hearts';

const BinocularsIconStory = args => (
  <BinocularsIcon {...args} />
);
BinocularsIconStory.storyName = 'Binoculars';

const ToolsIconStory = args => (
  <ToolsIcon {...args} />
);
ToolsIconStory.storyName = 'Tools';

const CompassIconStory = args => (
  <CompassIcon {...args} />
);
CompassIconStory.storyName = 'Compass';

const MoutainIconStory = args => (
  <MoutainIcon {...args} />
);
MoutainIconStory.storyName = 'Moutain';

const CalculatorIconStory = args => (
  <CalculatorIcon {...args} />
);
CalculatorIconStory.storyName = 'Calculator';

const HandHoldingHeartIconStory = args => (
  <HandHoldingHeartIcon {...args} />
);
HandHoldingHeartIconStory.storyName = 'Hand Holding Heart';

const SmileWinkIconStory = args => (
  <SmileWinkIcon {...args} />
);
SmileWinkIconStory.storyName = 'Smile Wink';

const BoltIconStory = args => (
  <BoltIcon {...args} />
);
BoltIconStory.storyName = 'Bolt';

const OctopussDeployIconStory = args => (
  <OctopussDeployIcon {...args} />
);
OctopussDeployIconStory.storyName = 'Octopuss Deploy';

const BatteryThreeQuartersIconStory = args => (
  <BatteryThreeQuartersIcon {...args} />
);
BatteryThreeQuartersIconStory.storyName = 'Battery Three Quarters';

const DumbbellIconStory = args => (
  <DumbbellIcon {...args} />
);
DumbbellIconStory.storyName = 'Dumbbell';

const CreditCardIconStory = args => (
  <CreditCardIcon {...args} />
);
CreditCardIconStory.storyName = 'Credit Card';

const PauseIconStory = args => (
  <PauseIcon {...args} />
);
PauseIconStory.storyName = 'Pause';

const PlayIconStory = args => (
  <PlayIcon {...args} />
);
PlayIconStory.storyName = 'Play';

const ShoppingCartIconStory = args => (
  <ShoppingCartIcon {...args} />
);
ShoppingCartIconStory.storyName = 'Shopping Cart';

const ShieldCheckmarkIconStory = args => (
  <ShieldCheckmarkIcon {...args} />
);
ShieldCheckmarkIconStory.storyName = 'Shield Checkmark';

const InfoCircleIconStory = args => (
  <InfoCircleIcon {...args} />
);
InfoCircleIconStory.storyName = 'Info Circle';

const CheckCircleIconStory = args => (
  <CheckCircleIcon {...args} />
);
CheckCircleIconStory.storyName = 'Check Circle';

const EyeIconStory = args => (
  <EyeIcon {...args} />
);
EyeIconStory.storyName = 'Eye';

const EnvelopeIconStory = args => (
  <EnvelopeIcon {...args} />
);
EnvelopeIconStory.storyName = 'Envelope';

const PeopleIconStory = args => (
  <PeopleIcon {...args} />
);
PeopleIconStory.storyName = 'People';

const StarIconStory = args => (
  <StarIcon {...args} />
);
StarIconStory.storyName = 'Star';

const CalendarIconStory = args => (
  <CalendarIcon {...args} />
);
CalendarIconStory.storyName = 'Calendar';

const UniversityIconStory = args => (
  <UniversityIcon {...args} />
);
UniversityIconStory.storyName = 'University';

const PhoneIconStory = args => (
  <PhoneIcon {...args} />
);
PhoneIconStory.storyName = 'Phone';

const PenIconStory = args => (
  <PenIcon {...args} />
);
PenIconStory.storyName = 'Pen';

const ChatBubblesIconStory = args => (
  <ChatBubblesIcon {...args} />
);
ChatBubblesIconStory.storyName = 'Chat Bubbles';

const RegDotCircleIconStory = args => (
  <RegDotCircleIcon {...args} />
);
RegDotCircleIconStory.storyName = 'Reg Dot Circle';

const TagsIconStory = args => (
  <TagsIcon {...args} />
);
TagsIconStory.storyName = 'Tags';

const DonutIconStory = args => (
  <DonutIcon {...args} />
);
DonutIconStory.storyName = 'Donut';

const ArrowRepeatIconStory = args => (
  <ArrowRepeatIcon {...args} />
);
ArrowRepeatIconStory.storyName = 'Arrow Repeat';

// ⚠️ PLEASE KEEP IN ALPHABETICAL ORDER ⚠️
export {
  ArrowRepeatIconStory,
  BatteryThreeQuartersIconStory,
  BinocularsIconStory,
  BoltIconStory,
  BriefCaseIconStory,
  CalculatorIconStory,
  CalendarIconStory,
  ChatBubblesIconStory,
  CheckCircleIconStory,
  CompassIconStory,
  CreditCardIconStory,
  DonutIconStory,
  DumbbellIconStory,
  EnvelopeIconStory,
  EyeIconStory,
  HandHoldingHeartIconStory,
  InfoCircleIconStory,
  MapSignsIconStory,
  MoutainIconStory,
  OctopussDeployIconStory,
  PauseIconStory,
  PenIconStory,
  PeopleIconStory,
  PhoneIconStory,
  PlayIconStory,
  RegDotCircleIconStory,
  ShieldCheckmarkIconStory,
  ShoppingCartIconStory,
  SmileGrinHeartsIconStory,
  SmileIconStory,
  SmileWinkIconStory,
  StarIconStory,
  TagsIconStory,
  ThumbsUpIconStory,
  ToolsIconStory,
  TrophyIconStory,
  UniversityIconStory,
};
