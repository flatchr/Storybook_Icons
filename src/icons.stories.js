import React from "react";
// Icons import
import UserIcon from './icons/User';
import ErrorIcon from './icons/Error';
import NotificationsIcon from './icons/Notifications';
import NotificationsActiveIcon from './icons/NotificationsActive';
import HeartIcon from './icons/Heart';
import ClipboardListIcon from './icons/ClipboardList';
import DonutIcon from './icons/Donut';
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
import ChatBubbleIcon from './icons/ChatBubble';
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
import PlusIcon from './icons/Plus';
import PenIcon from './icons/Pen';
import CheckIcon from './icons/Check';
import CloseIcon from './icons/Close';
import CaretDownIcon from './icons/CaretDown';
import CaretUpIcon from './icons/CaretUp';
import SearchIcon from './icons/Search';
import EyeIcon from './icons/Eye';
import EyeOffIcon from './icons/EyeOff';
import LockIcon from './icons/Lock';
import LockOpenIcon from './icons/LockOpen';
import CheckCircleIcon from './icons/CheckCircle';
import AddCircleOutlineIcon from './icons/AddCircleOutline';
import RemoveCircleOutlineIcon from './icons/RemoveCircleOutline';
import ChevronLeftIcon from './icons/ChevronLeft';
import CogIcon from './icons/Cog';
import ColorPaletteIcon from './icons/ColorPalette';
import FormatAlignLeftIcon from './icons/FormatAlignLeft';
import PublishIcon from './icons/Publish';
import CameraIcon from './icons/Camera';
import PlayCircleIcon from './icons/PlayCircle';
import AnalyticsOutlineIcon from './icons/AnalyticsOutline';
import FacebookIcon from './icons/Facebook';
import TwitterIcon from './icons/Twitter';
import LinkedinIcon from './icons/Linkedin';
import YoutubeIcon from './icons/Youtube';
import InstagramIcon from './icons/Instagram';
import ChevronUpIcon from './icons/ChevronUp';
import ChevronDownIcon from './icons/ChevronDown';
import LinkIcon from './icons/Link';
import MergeIcon from './icons/Merge';
import CloneIcon from './icons/Clone';
import BookmarkAltIcon from './icons/BookmarkAlt';
import SourceTreeIcon from './icons/SourceTree';
import VectorSquareIcon from './icons/VectorSquare';
import SaveIcon from './icons/Save';
import DownloadIcon from './icons/Download';
import PaperPlaneIcon from './icons/PaperPlane';
import RandomIcon from './icons/Random';
import RedoLoopIcon from './icons/RedoLoop';
import AppsIcon from './icons/Apps';
import GridIcon from './icons/Grid';
import CalendarIcon from './icons/Calendar';
import EnvelopeIcon from './icons/Envelope';
import GlobeIcon from './icons/Globe';
import GlobeEuropeIcon from './icons/GlobeEurope';
import NetworkWiredIcon from './icons/NetworkWired';
import RegDotCircleIcon from './icons/RegDotCircle';
import UniversityIcon from './icons/University';
import StreetViewIcon from './icons/StreetView';
import UserClockIcon from './icons/UserClock';
import GraduateIcon from './icons/Graduate';
import ChatBubblesIcon from './icons/ChatBubbles';
import FacebookSquareIcon from './icons/FacebookSquare';
import LinkedinSquareIcon from './icons/LinkedinSquare';
import AttachFileIcon from './icons/AttachFile';
import StarHalfIcon from './icons/StarHalf';
import StarBorderIcon from './icons/StarBorder';
import GithubSquareIcon from './icons/GithubSquare';
import TwitterSquareIcon from './icons/TwitterSquare';
import ExternalLinkIcon from './icons/ExternalLink';
import FileAltIcon from './icons/FileAlt';
import PhoneIcon from './icons/Phone';
import SkypeIcon from './icons/Skype';
import ShareIcon from './icons/Share';
import GoogleHangoutsIcon from './icons/GoogleHangouts';
import FontDownloadIcon from './icons/FontDownload';
import FormatBoldIcon from './icons/FormatBold';
import FormatClearIcon from './icons/FormatClear';
import FormatItalicIcon from './icons/FormatItalic';
import FormatListBulletedIcon from './icons/FormatListBulleted';
import FormatListNumberedIcon from './icons/FormatListNumbered';
import FormatUnderlineIcon from './icons/FormatUnderline';
import ImageIcon from './icons/Image';
import RedoIcon from './icons/Redo';
import UndoIcon from './icons/Undo';
import TrashIcon from './icons/Trash';
import CalendarCheckIcon from './icons/CalendarCheck';
import BanIcon from './icons/Ban';
import SignInIcon from './icons/SignIn';
import InfoCircleIcon from './icons/InfoCircle';
import AddCircleIcon from './icons/AddCircle';
import EyedropperIcon from './icons/Eyedropper';

const icons = {
  title: "Iconography/Icons",
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

const ChatBubbleIconStory = args => (
  <ChatBubbleIcon {...args} />
);
ChatBubbleIconStory.storyName = 'ChatBubble';
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

const PlusIconStory = args => (
  <PlusIcon {...args} />
);
PlusIconStory.storyName = 'Plus';

const PenIconStory = args => (
  <PenIcon {...args} />
);
PenIconStory.storyName = 'Pen';

const CheckIconStory = args => (
  <CheckIcon {...args} />
);
CheckIconStory.storyName = 'Check';

const CloseIconStory = args => (
  <CloseIcon {...args} />
);
CloseIconStory.storyName = 'Close';

const CaretDownIconStory = args => (
  <CaretDownIcon {...args} />
);
CaretDownIconStory.storyName = 'Caret Down';

const CaretUpIconStory = args => (
  <CaretUpIcon {...args} />
);
CaretUpIconStory.storyName = 'Caret Up';

const SearchIconStory = args => (
  <SearchIcon {...args} />
);
SearchIconStory.storyName = 'Search';

const EyeIconStory = args => (
  <EyeIcon {...args} />
);
EyeIconStory.storyName = 'Eye';

const EyeOffIconStory = args => (
  <EyeOffIcon {...args} />
);
EyeOffIconStory.storyName = 'Eye Off';

const LockIconStory = args => (
  <LockIcon {...args} />
);
LockIconStory.storyName = 'Lock';

const LockOpenIconStory = args => (
  <LockOpenIcon {...args} />
);
LockOpenIconStory.storyName = 'Lock Open';

const CheckCircleIconStory = args => (
  <CheckCircleIcon {...args} />
);
CheckCircleIconStory.storyName = 'Check Circle';

const AddCircleOutlineIconStory = args => (
  <AddCircleOutlineIcon {...args} />
);
AddCircleOutlineIconStory.storyName = 'Add Circle Outline';

const RemoveCircleOutlineIconStory = args => (
  <RemoveCircleOutlineIcon {...args} />
);
RemoveCircleOutlineIconStory.storyName = 'Remove Circle Outline';

const ChevronLeftIconStory = args => (
  <ChevronLeftIcon {...args} />
);
ChevronLeftIconStory.storyName = 'Chevron Left';

const CogIconStory = args => (
  <CogIcon {...args} />
);
CogIconStory.storyName = 'Cog';

const ColorPaletteIconStory = args => (
  <ColorPaletteIcon {...args} />
);
ColorPaletteIconStory.storyName = 'Color Palette';

const FormatAlignLeftIconStory = args => (
  <FormatAlignLeftIcon {...args} />
);
FormatAlignLeftIconStory.storyName = 'Format Align Left';

const PublishIconStory = args => (
  <PublishIcon {...args} />
);
PublishIconStory.storyName = 'Publish';

const CameraIconStory = args => (
  <CameraIcon {...args} />
);
CameraIconStory.storyName = 'Camera';

const PlayCircleIconStory = args => (
  <PlayCircleIcon {...args} />
);
PlayCircleIconStory.storyName = 'Play Circle';

const AnalyticsOutlineIconStory = args => (
  <AnalyticsOutlineIcon {...args} />
);
AnalyticsOutlineIconStory.storyName = 'Analytics Outline';

const FacebookIconStory = args => (
  <FacebookIcon {...args} />
);
FacebookIconStory.storyName = 'Facebook';

const TwitterIconStory = args => (
  <TwitterIcon {...args} />
);
TwitterIconStory.storyName = 'Twitter';

const LinkedinIconStory = args => (
  <LinkedinIcon {...args} />
);
LinkedinIconStory.storyName = 'Linkedin';

const YoutubeIconStory = args => (
  <YoutubeIcon {...args} />
);
YoutubeIconStory.storyName = 'Youtube';

const InstagramIconStory = args => (
  <InstagramIcon {...args} />
);
InstagramIconStory.storyName = 'Instagram';

const ChevronUpIconStory = args => (
  <ChevronUpIcon {...args} />
);
ChevronUpIconStory.storyName = 'Chevron Up';

const ChevronDownIconStory = args => (
  <ChevronDownIcon {...args} />
);
ChevronDownIconStory.storyName = 'Chevron Down';

const LinkIconStory = args => (
  <LinkIcon {...args} />
);
LinkIconStory.storyName = 'Link';

const MergeIconStory = args => (
  <MergeIcon {...args} />
);
MergeIconStory.storyName = 'Merge';

const CloneIconStory = args => (
  <CloneIcon {...args} />
);
CloneIconStory.storyName = 'Clone';

const BookmarkAltIconStory = args => (
  <BookmarkAltIcon {...args} />
);
BookmarkAltIconStory.storyName = 'Bookmark Alt';

const SourceTreeIconStory = args => (
  <SourceTreeIcon {...args} />
);
SourceTreeIconStory.storyName = 'Source Tree';

const VectorSquareIconStory = args => (
  <VectorSquareIcon {...args} />
);
VectorSquareIconStory.storyName = 'Vector Square';

const SaveIconStory = args => (
  <SaveIcon {...args} />
);
SaveIconStory.storyName = 'Save';

const DownloadIconStory = args => (
  <DownloadIcon {...args} />
);
DownloadIconStory.storyName = 'Download';

const PaperPlaneIconStory = args => (
  <PaperPlaneIcon {...args} />
);
PaperPlaneIconStory.storyName = 'Paper Plane';

const RandomIconStory = args => (
  <RandomIcon {...args} />
);
RandomIconStory.storyName = 'Random';

const RedoLoopIconStory = args => (
  <RedoLoopIcon {...args} />
);
RedoLoopIconStory.storyName = 'Redo Loop';

const AppsIconStory = args => (
  <AppsIcon {...args} />
);
AppsIconStory.storyName = 'Apps';

const GridIconStory = args => (
  <GridIcon {...args} />
);
GridIconStory.storyName = 'Grid';

const CalendarIconStory = args => (
  <CalendarIcon {...args} />
);
CalendarIconStory.storyName = 'Calendar';

const EnvelopeIconStory = args => (
  <EnvelopeIcon {...args} />
);
EnvelopeIconStory.storyName = 'Envelope';

const GlobeIconStory = args => (
  <GlobeIcon {...args} />
);
GlobeIconStory.storyName = 'Globe';

const GlobeEuropeIconStory = args => (
  <GlobeEuropeIcon {...args} />
);
GlobeEuropeIconStory.storyName = 'Globe Europe';

const NetworkWiredIconStory = args => (
  <NetworkWiredIcon {...args} />
);
NetworkWiredIconStory.storyName = 'Network Wired';

const RegDotCircleIconStory = args => (
  <RegDotCircleIcon {...args} />
);
RegDotCircleIconStory.storyName = 'Reg Dot Circle';

const UniversityIconStory = args => (
  <UniversityIcon {...args} />
);
UniversityIconStory.storyName = 'University';

const StreetViewIconStory = args => (
  <StreetViewIcon {...args} />
);
StreetViewIconStory.storyName = 'Street View';

const UserClockIconStory = args => (
  <UserClockIcon {...args} />
);
UserClockIconStory.storyName = 'User clock';

const GraduateIconStory = args => (
  <GraduateIcon {...args} />
);
GraduateIconStory.storyName = 'Graduate';

const ChatBubblesIconStory = args => (
  <ChatBubblesIcon {...args} />
);
ChatBubblesIconStory.storyName = 'Chat Bubbles';

const FacebookSquareIconStory = args => (
  <FacebookSquareIcon {...args} />
);
FacebookSquareIconStory.storyName = 'Facebook Square';

const LinkedinSquareIconStory = args => (
  <LinkedinSquareIcon {...args} />
);
LinkedinSquareIconStory.storyName = 'Linkedin Square';

const AttachFileIconStory = args => (
  <AttachFileIcon {...args} />
);
AttachFileIconStory.storyName = 'Attach File';

const StarHalfIconStory = args => (
  <StarHalfIcon {...args} />
);
StarHalfIconStory.storyName = 'Star Half';

const StarBorderIconStory = args => (
  <StarBorderIcon {...args} />
);
StarBorderIconStory.storyName = 'Star Border';

const GithubSquareIconStory = args => (
  <GithubSquareIcon {...args} />
);
GithubSquareIconStory.storyName = 'Github Square';

const TwitterSquareIconStory = args => (
  <TwitterSquareIcon {...args} />
);
TwitterSquareIconStory.storyName = 'Twitter Square';

const ExternalLinkIconStory = args => (
  <ExternalLinkIcon {...args} />
);
ExternalLinkIconStory.storyName = 'External Link';

const FileAltIconStory = args => (
  <FileAltIcon {...args} />
);
FileAltIconStory.storyName = 'File Alt';

const PhoneIconStory = args => (
  <PhoneIcon {...args} />
);
PhoneIconStory.storyName = 'Phone';

const SkypeIconStory = args => (
  <SkypeIcon {...args} />
);
SkypeIconStory.storyName = 'Skype';

const ShareIconStory = args => (
  <ShareIcon {...args} />
);
ShareIconStory.storyName = 'Share';

const GoogleHangoutsIconStory = args => (
  <GoogleHangoutsIcon {...args} />
);
GoogleHangoutsIconStory.storyName = 'Google Hangouts';

const FontDownloadIconStory = args => (
  <FontDownloadIcon {...args} />
);
FontDownloadIconStory.storyName = 'Font Download';

const FormatBoldIconStory = args => (
  <FormatBoldIcon {...args} />
);
FormatBoldIconStory.storyName = 'Format Bold';

const FormatClearIconStory = args => (
  <FormatClearIcon {...args} />
);
FormatClearIconStory.storyName = 'Format Clear';

const FormatItalicIconStory = args => (
  <FormatItalicIcon {...args} />
);
FormatItalicIconStory.storyName = 'Format Italic';

const FormatListBulletedIconStory = args => (
  <FormatListBulletedIcon {...args} />
);
FormatListBulletedIconStory.storyName = 'Format List Bulleted';

const FormatListNumberedIconStory = args => (
  <FormatListNumberedIcon {...args} />
);
FormatListNumberedIconStory.storyName = 'Format List Numbered';

const FormatUnderlineIconStory = args => (
  <FormatUnderlineIcon {...args} />
);
FormatUnderlineIconStory.storyName = 'Format Underline';

const ImageIconStory = args => (
  <ImageIcon {...args} />
);
ImageIconStory.storyName = 'Image';

const RedoIconStory = args => (
  <RedoIcon {...args} />
);
RedoIconStory.storyName = 'Redo';

const UndoIconStory = args => (
  <UndoIcon {...args} />
);
UndoIconStory.storyName = 'Undo';

const TrashIconStory = args => (
  <TrashIcon {...args} />
);
TrashIconStory.storyName = 'Trash';

const CalendarCheckIconStory = args => (
  <CalendarCheckIcon {...args} />
);
CalendarCheckIconStory.storyName = 'Calendar Check';

const BanIconStory = args => (
  <BanIcon {...args} />
);
BanIconStory.storyName = 'Ban';

const SignInIconStory = args => (
  <SignInIcon {...args} />
);
SignInIconStory.storyName = 'Sign In';

const InfoCircleIconStory = args => (
  <InfoCircleIcon {...args} />
);
InfoCircleIconStory.storyName = 'Info Circle';

const AddCircleIconStory = args => (
  <AddCircleIcon {...args} />
);
AddCircleIconStory.storyName = 'Add Circle';

const EyedropperIconStory = args => (
  <EyedropperIcon {...args} />
);
EyedropperIconStory.storyName = 'Eyedropper';

// ⚠️ PLEASE KEEP IN ALPHABETICAL ORDER ⚠️
export {
  AccountPinCircleFillIconStory,
  AddCircleIconStory,
  AddCircleOutlineIconStory,
  AnalyticsOutlineIconStory,
  AppsIconStory,
  ArrowForwardIconStory,
  AttachFileIconStory,
  BanIconStory,
  BookmarkAltIconStory,
  BookmarkIconStory,
  BuildingIconStory,
  BullhornIconStory,
  CalendarCheckIconStory,
  CalendarIconStory,
  CameraIconStory,
  CaretDownIconStory,
  CaretUpIconStory,
  ChatBubbleIconStory,
  ChatBubblesIconStory,
  CheckCircleIconStory,
  CheckIconStory,
  ChevronDownIconStory,
  ChevronLeftIconStory,
  ChevronRightIconStory,
  ChevronUpIconStory,
  CircleIconStory,
  ClipboardListIconStory,
  CloneIconStory,
  CloseIconStory,
  CogIconStory,
  CollectionsBookmarkIconStory,
  ColorPaletteIconStory,
  ColumnsIconStory,
  ContentPasteIconStory,
  DonutIconStory,
  DownloadIconStory,
  EnvelopeIconStory,
  ErrorIconStory,
  ExternalLinkIconStory,
  EyedropperIconStory,
  EyeIconStory,
  EyeOffIconStory,
  FacebookIconStory,
  FacebookSquareIconStory,
  FileAltIconStory,
  FileIconStory,
  FileInvoiceDollarIconStory,
  FilterIconStory,
  FolderIconStory,
  FontDownloadIconStory,
  FormatAlignLeftIconStory,
  FormatBoldIconStory,
  FormatClearIconStory,
  FormatItalicIconStory,
  FormatListBulletedIconStory,
  FormatListNumberedIconStory,
  FormatUnderlineIconStory,
  GiftIconStory,
  GithubSquareIconStory,
  GlobeEuropeIconStory,
  GlobeIconStory,
  GoogleHangoutsIconStory,
  GraduateIconStory,
  GridIconStory,
  HeartIconStory,
  ImageIconStory,
  InfoCircleIconStory,
  InstagramIconStory,
  KeyIconStory,
  LayerGroupIconStory,
  LinkedinIconStory,
  LinkedinSquareIconStory,
  LinkIconStory,
  LockIconStory,
  LockOpenIconStory,
  MenuIconStory,
  MenuFoldIconStory,
  MenuUnfoldIconStory,
  MergeIconStory,
  NetworkWiredIconStory,
  NotificationsIconStory,
  NotificationsActiveIconStory,
  PaperPlaneIconStory,
  PenIconStory,
  PeopleIconStory,
  PhoneIconStory,
  PlayCircleIconStory,
  PlusIconStory,
  PublishIconStory,
  RandomIconStory,
  RedoIconStory,
  RedoLoopIconStory,
  RegDotCircleIconStory,
  RegisterListAltIconStory,
  RemoveCircleOutlineIconStory,
  SaveIconStory,
  SearchIconStory,
  ShareIconStory,
  ShieldAltIconStory,
  SignInIconStory,
  SkypeIconStory,
  SourceTreeIconStory,
  StarBorderIconStory,
  StarHalfIconStory,
  StarIconStory,
  StoreAltIconStory,
  StreetViewIconStory,
  TableAltIconStory,
  TachometerAltIconStory,
  TagsIconStory,
  TrashIconStory,
  TrashBinIconStory,
  TwitterIconStory,
  TwitterSquareIconStory,
  UndoIconStory,
  UniversityIconStory,
  UserClockIconStory,
  UserIconStory,
  UserLockIconStory,
  VectorSquareIconStory,
  YoutubeIconStory,
};
