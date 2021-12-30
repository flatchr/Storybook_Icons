import React from "react";
// Icons import
import PeopleIcon from './icons/People';
import ErrorIcon from './icons/Error';
import NotificationsIcon from './icons/Notifications';
import NotificationsActiveIcon from './icons/NotificationsActive';
import HeartIcon from './icons/Heart';
import ClipboardListIcon from './icons/ClipboardList';
import DonutIcon from './icons/Donut';
import ListIcon from './icons/List';
import ArrowForwardIcon from './icons/ArrowForward';
import MenuIcon from './icons/Menu';
import AccountPinCircleFillIcon from './icons/AccountPinCircleFill';
import GiftIcon from './icons/Gift';
import CircleIcon from './icons/Circle';
import MenuUnfoldIcon from './icons/MenuUnfold';
import MenuFoldIcon from './icons/MenuFold';
import CollectionsBookmarkIcon from './icons/CollectionsBookmark';
import ContentPasteIcon from "./icons/ContentPaste";
import TrashBinIcon from "./icons/TrashBin";
import ChevronRightIcon from './icons/ChevronRight';
import BookmarkIcon from './icons/Bookmark';
import FolderIcon from './icons/Folder';

const icons = {
  title: "Iconography/Icons",
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

export default icons;

const PeopleIconStory = args => (
  <PeopleIcon {...args} />
);
PeopleIconStory.storyName = 'People';

const ErrorIconStory = args => (
  <ErrorIcon {...args} />
);
ErrorIconStory.storyName = 'Error';

const NotificationsIconStory = args => (
  <NotificationsIcon {...args} />
);
NotificationsIconStory.storyName = 'Notifications';

const NotificationsActiveIconStory = args => (
  <NotificationsActiveIcon {...args} />
);
NotificationsActiveIconStory.storyName = 'Notifications Active';

const HeartIconStory = args => (
  <HeartIcon {...args} />
);
HeartIconStory.storyName = 'Heart';

const ClipboardListIconStory = args => (
  <ClipboardListIcon {...args} />
);
ClipboardListIconStory.storyName = 'Clipboard list';

const DonutIconStory = args => (
  <DonutIcon {...args} />
);
DonutIconStory.storyName = 'Donut';

const ListIconStory = args => (
  <ListIcon {...args} />
);
ListIconStory.storyName = 'List';

const ArrowForwardIconStory = args => (
  <ArrowForwardIcon {...args} />
);
ArrowForwardIconStory.storyName = 'Arrow forward';

const MenuIconStory = args => (
  <MenuIcon {...args} />
);
MenuIconStory.storyName = 'Menu';

const AccountPinCircleFillIconStory = args => (
  <AccountPinCircleFillIcon {...args} />
);
AccountPinCircleFillIconStory.storyName = 'Account Pin Circle Fill';

const GiftIconStory = args => (
  <GiftIcon {...args} />
);
GiftIconStory.storyName = 'Gift';

const CircleIconStory = args => (
  <CircleIcon {...args} />
);
CircleIconStory.storyName = 'Circle';

const MenuUnfoldIconStory = args => (
  <MenuUnfoldIcon {...args} />
);
MenuUnfoldIconStory.storyName = 'Menu Unfold';

const MenuFoldIconStory = args => (
  <MenuFoldIcon {...args} />
);
MenuFoldIconStory.storyName = 'Menu Fold';

const CollectionsBookmarkIconStory = args => (
  <CollectionsBookmarkIcon {...args} />
);
CollectionsBookmarkIconStory.storyName = 'Collections Bookmark';

const ContentPasteIconStory = args => (
  <ContentPasteIcon {...args} />
);
ContentPasteIconStory.storyName = 'Content Paste';

const TrashBinIconStory = args => (
  <TrashBinIcon {...args} />
);
TrashBinIconStory.storyName = 'Trash Bin';

const ChevronRightIconStory = args => (
  <ChevronRightIcon {...args} />
);
ChevronRightIconStory.storyName = 'Chevron right';

const BookmarkIconStory = args => (
  <BookmarkIcon {...args} />
);
BookmarkIconStory.storyName = 'Bookmark';

const FolderIconStory = args => (
  <FolderIcon {...args} />
);
FolderIconStory.storyName = 'Folder';

// ⚠️ PLEASE KEEP IN ALPHABETICAL ORDER ⚠️
export {
  AccountPinCircleFillIconStory,
  ArrowForwardIconStory,
  BookmarkIconStory,
  ChevronRightIconStory,
  CircleIconStory,
  ClipboardListIconStory,
  CollectionsBookmarkIconStory,
  ContentPasteIconStory,
  DonutIconStory,
  ErrorIconStory,
  FolderIconStory,
  GiftIconStory,
  HeartIconStory,
  ListIconStory,
  MenuIconStory,
  MenuFoldIconStory,
  MenuUnfoldIconStory,
  NotificationsIconStory,
  NotificationsActiveIconStory,
  PeopleIconStory,
  TrashBinIconStory,
};
