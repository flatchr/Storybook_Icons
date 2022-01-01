import React from "react";
// Icons import
import UserIcon from './icons/User';
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
import CommentAltIcon from './icons/CommentAlt';
import BullhornIcon from './icons/Bullhorn';
import FileIcon from './icons/File';
import FilterIcon from './icons/Filter';
import KeyIcon from './icons/Key';
import RegisterListAltIcon from './icons/RegisterListAlt';
import StarIcon from './icons/Star';
import TagsIcon from './icons/Tags';
import PeopleIcon from './icons/People';
import BuildingIcon from './icons/Building';
import ColumnsIcon from './icons/Columns';
import StoreAltIcon from './icons/StoreAlt';
import FileInvoiceDollarIcon from './icons/FileInvoiceDollar';
import TachometerAltIcon from './icons/TachometerAlt';
import LayerGroupIcon from './icons/LayerGroup';
import ShieldAltIcon from './icons/ShieldAlt';
import TableAltIcon from './icons/TableAlt';
import UserLockIcon from './icons/UserLock';

const icons = {
  title: "Icons",
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
  args: {
    color: "#989898",
  },
};

export default icons;

const UserIconStory = args => (
  <UserIcon {...args} />
);
UserIconStory.storyName = 'User';

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

const CommentAltIconStory = args => (
  <CommentAltIcon {...args} />
);
CommentAltIconStory.storyName = 'CommentAlt';
// START
const BullhornIconStory = args => (
  <BullhornIcon {...args} />
);
BullhornIconStory.storyName = 'Bullhorn';

const FileIconStory = args => (
  <FileIcon {...args} />
);
FileIconStory.storyName = 'File';

const FilterIconStory = args => (
  <FilterIcon {...args} />
);
FilterIconStory.storyName = 'Filter';

const KeyIconStory = args => (
  <KeyIcon {...args} />
);
KeyIconStory.storyName = 'Key';

const RegisterListAltIconStory = args => (
  <RegisterListAltIcon {...args} />
);
RegisterListAltIconStory.storyName = 'Register List Alt';

const StarIconStory = args => (
  <StarIcon {...args} />
);
StarIconStory.storyName = 'Star';

const TagsIconStory = args => (
  <TagsIcon {...args} />
);
TagsIconStory.storyName = 'Tags';

const PeopleIconStory = args => (
  <PeopleIcon {...args} />
);
PeopleIconStory.storyName = 'People';

const BuildingIconStory = args => (
  <BuildingIcon {...args} />
);
BuildingIconStory.storyName = 'Building';

const ColumnsIconStory = args => (
  <ColumnsIcon {...args} />
);
ColumnsIconStory.storyName = 'Columns';

const StoreAltIconStory = args => (
  <StoreAltIcon {...args} />
);
StoreAltIconStory.storyName = 'Store Alt';

const FileInvoiceDollarIconStory = args => (
  <FileInvoiceDollarIcon {...args} />
);
FileInvoiceDollarIconStory.storyName = 'File Invoice Dollar';

const TachometerAltIconStory = args => (
  <TachometerAltIcon {...args} />
);
TachometerAltIconStory.storyName = 'Tachometer Alt';

const LayerGroupIconStory = args => (
  <LayerGroupIcon {...args} />
);
LayerGroupIconStory.storyName = 'Layer Group';

const ShieldAltIconStory = args => (
  <ShieldAltIcon {...args} />
);
ShieldAltIconStory.storyName = 'Shield Alt';

const TableAltIconStory = args => (
  <TableAltIcon {...args} />
);
TableAltIconStory.storyName = 'Table Alt';

const UserLockIconStory = args => (
  <UserLockIcon {...args} />
);
UserLockIconStory.storyName = 'User Lock';

// ⚠️ PLEASE KEEP IN ALPHABETICAL ORDER ⚠️
export {
  AccountPinCircleFillIconStory,
  ArrowForwardIconStory,
  BookmarkIconStory,
  BuildingIconStory,
  BullhornIconStory,
  ChevronRightIconStory,
  CircleIconStory,
  ClipboardListIconStory,
  CollectionsBookmarkIconStory,
  ColumnsIconStory,
  CommentAltIconStory,
  ContentPasteIconStory,
  DonutIconStory,
  ErrorIconStory,
  FileIconStory,
  FileInvoiceDollarIconStory,
  FilterIconStory,
  FolderIconStory,
  GiftIconStory,
  HeartIconStory,
  KeyIconStory,
  LayerGroupIconStory,
  ListIconStory,
  MenuIconStory,
  MenuFoldIconStory,
  MenuUnfoldIconStory,
  NotificationsIconStory,
  NotificationsActiveIconStory,
  PeopleIconStory,
  RegisterListAltIconStory,
  ShieldAltIconStory,
  StarIconStory,
  StoreAltIconStory,
  TableAltIconStory,
  TachometerAltIconStory,
  UserIconStory,
  UserLockIconStory,
  TagsIconStory,
  TrashBinIconStory,
};
