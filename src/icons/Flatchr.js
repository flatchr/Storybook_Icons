import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';
import { date } from '@flatchr/helper';

// Paul Variants
import PinkOctoberVariant from './paulVariants/pinkOctober';
import HalloweenVariant from './paulVariants/halloween';
import SpringVariant from './paulVariants/spring';
import EasterVariant from './paulVariants/easter';
import FrenchMusicDayVariant from './paulVariants/frenchMusicDay';
import SummerVariant from './paulVariants/summer';
import MovemberVariant from './paulVariants/movember';
import FrenchNationalDayVariant from './paulVariants/frenchNationalDay';
import SaintPatrickVariant from './paulVariants/saintPatrick';
import HeartVariant from './paulVariants/heart';
import NewYearDayVariant from './paulVariants/newYearDay';
import EpiphanyVariant from './paulVariants/epiphany';
import CandlemasVariant from './paulVariants/candlemas';
import CancerDayVariant from './paulVariants/cancerDay';
import ShroveTuesdayVariant from './paulVariants/shroveTuesday';
import AprilFoolDayVariant from './paulVariants/aprilFoolDay';
import WorkersDayVariant from './paulVariants/workersDay';
import EuropeanDayVariant from './paulVariants/europeanDay';
import RolandGarrosVariant from './paulVariants/rolandGarros';
import WorldBloodDonorDayVariant from './paulVariants/worldBloodDonorDay';
import HolidaysVariant from './paulVariants/holidays';
import BackToSchoolVariant from './paulVariants/backToSchool';
import AutumnVariant from './paulVariants/autumn';
import SpanishNationalDayVariant from './paulVariants/spanishNationalDay';
import ArmisticeVariant from './paulVariants/armistice';
import WinterVariant from './paulVariants/winter';
import ChristmasSweaterDayVariant from './paulVariants/christmasSweaterDay';
import ChristmasVariant from './paulVariants/christmas';

const RenderEvent = ({ event }) => {
  switch (event) {
    case 'prideMonth':
    case 'saintValentine':
      return (
        <HeartVariant
          isSaintValentineEvent={event === 'saintValentine'}
        />
      );
    case 'saintPatrick':
      return <SaintPatrickVariant />;
    case 'easter':
      return <EasterVariant />;
    case 'spring':
      return <SpringVariant />;
    case 'summer':
      return <SummerVariant />;
    case 'frenchNationalDay':
      return <FrenchNationalDayVariant />;
    case 'frenchMusicDay':
      return <FrenchMusicDayVariant />;
    case 'halloween':
      return <HalloweenVariant />;
    case 'pinkOctober':
      return <PinkOctoberVariant />;
    case 'movember':
      return <MovemberVariant />;
    case 'newYearDay':
      return <NewYearDayVariant />;
    case 'epiphany':
      return <EpiphanyVariant />;
    case 'candlemas':
      return <CandlemasVariant />;
    case 'cancerDay':
      return <CancerDayVariant />;
    case 'shroveTuesday':
      return <ShroveTuesdayVariant />;
    case 'aprilFoolDay':
      return <AprilFoolDayVariant />;
    case 'workersDay':
      return <WorkersDayVariant />;
    case 'europeanDay':
      return <EuropeanDayVariant />;
    case 'rolandGarros':
      return <RolandGarrosVariant />;
    case 'worldBloodDonorDay':
      return <WorldBloodDonorDayVariant />;
    case 'holidays':
      return <HolidaysVariant />;
    case 'backToSchool':
      return <BackToSchoolVariant />;
    case 'autumn':
      return <AutumnVariant />;
    case 'spanishNationalDay':
      return <SpanishNationalDayVariant />;
    case 'armistice':
      return <ArmisticeVariant />;
    case 'winter':
      return <WinterVariant />;
    case 'christmasSweaterDay':
      return <ChristmasSweaterDayVariant />;
    case 'christmas':
      return <ChristmasVariant />;
    default:
      return null;
  }
};

const LogoFlatchr = props => {
  const {
    color = theme.colors.primary400,
    width:widthProp = null,
    height:heightProp = null,
    textColor = null,
    onlyPaul = false,
    event = null,
    noEventRender = false,
  } = props;

  const dimensions = () => {
    let width = 347;
    let height = 90;
    if (onlyPaul) {
      height = 90;
      width = 75;
    }
    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }
    if (widthProp && !heightProp) {
      height = widthProp * height / width;
      width = widthProp;
    }
    if (!widthProp && heightProp) {
      width = width * heightProp / height;
      height = heightProp;
    }
    return {
      height,
      width,
    }
  };

  return (
    <Svg
      width={dimensions().width}
      height={dimensions().height}
      viewBox={onlyPaul ? '-7.5 -7.5 90 105' : '0 0 347 90'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M71.7865 75.1941C69.5333 74.7516 68.3645 73.7274 68.3645 73.7274C66.4385 72.3343 66.0909 69.4054 66.0909 69.4054L64.9648 61.4726C64.9249 60.2108 63.9787 56.6611 63.9787 56.6611C61.4586 46.3031 52.8075 45.8774 52.8075 45.8774C52.5893 45.8428 52.6053 45.5467 52.6053 45.5467C52.2719 43.1525 53.8858 39.5949 53.8858 39.5949L56.8635 34.0642C60.0903 27.9661 60.0265 23.7124 60.0265 23.7124C60.7359 13.6744 54.3619 7.61264 54.3619 7.61264C47.1359 -0.260765 38.1239 0.198563 37.5156 0.240242C36.9073 0.198563 27.8944 -0.260765 20.6683 7.61264C20.6683 7.61264 14.2953 13.6744 15.0047 23.7124C15.0047 23.7124 14.94 27.9661 18.1677 34.0642L21.1454 39.5949C21.1454 39.5949 22.7584 43.1525 22.425 45.5467C22.425 45.5467 22.4409 45.8428 22.2228 45.8774C22.2228 45.8774 13.5717 46.3031 11.0516 56.6611C11.0516 56.6611 10.1054 60.2108 10.0655 61.4726L8.93847 69.4054C8.93847 69.4054 8.59175 72.3343 6.66574 73.7274C6.66574 73.7274 5.4979 74.7516 3.2438 75.1941C3.2438 75.1941 -0.327125 76.0232 0.309558 79.6012C0.309558 79.6012 0.890378 82.5319 4.25823 82.4024C4.25823 82.4024 8.63254 82.6809 12.9341 79.611C12.9341 79.611 17.0983 77.129 19.0208 69.8124C19.0208 69.8124 21.6313 60.9477 22.5482 59.7709C22.5482 59.7709 22.8027 59.2158 23.3827 59.2017L23.85 59.1786C23.85 59.1786 24.2188 59.1103 24.2188 59.9643C24.2188 59.9643 24.7917 66.5457 24.4193 69.3017C24.4193 69.3017 24.1036 76.9756 20.5619 82.3616C20.5619 82.3616 19.395 84.1041 19.1617 84.5413C19.1617 84.5413 18.0249 86.7014 20.0112 88.7427C20.0112 88.7427 22.5979 91.0996 25.3149 88.701C25.3149 88.701 31.6507 83.4825 34.678 73.9136C34.678 73.9136 37.0704 66.3337 37.4748 61.6774V61.6331L37.5555 61.6774C37.9598 66.3337 40.3523 73.9136 40.3523 73.9136C43.3796 83.4825 49.7145 88.701 49.7145 88.701C52.4315 91.0996 55.0181 88.7427 55.0181 88.7427C57.0062 86.7014 55.8685 84.5413 55.8685 84.5413C55.6344 84.1041 54.4684 82.3616 54.4684 82.3616C50.9276 76.9756 50.6119 69.3017 50.6119 69.3017C50.2386 66.5457 50.8114 59.9643 50.8114 59.9643C50.8105 59.0296 51.1812 59.1759 51.1812 59.1759L51.6476 59.2017C52.2276 59.2158 52.4821 59.7709 52.4821 59.7709C53.3989 60.9477 56.0104 69.8124 56.0104 69.8124C57.932 77.129 62.0952 79.611 62.0952 79.611C66.3977 82.6809 70.7712 82.4024 70.7712 82.4024C74.1399 82.5319 74.7207 79.6012 74.7207 79.6012C75.3574 76.0232 71.7865 75.1941 71.7865 75.1941Z"
        fill={color}
      />
      {!noEventRender && (
        <RenderEvent
          event={event || date.getEventName(new Date())}
        />
      )}
      {!onlyPaul && (
        <>
          <Path
            d="M133.81 74.4773C130.763 74.4773 128.325 72.0419 128.325 68.9905V20.749C128.325 17.7875 130.763 15.3491 133.985 15.3491C136.946 15.3491 139.384 17.7875 139.384 20.749V68.9905C139.384 72.0419 136.946 74.4773 133.81 74.4773ZM119.703 23.7093H118.744C115.697 23.7093 113.433 25.7116 113.433 29.6298V31.8943H117.788C120.312 31.8943 122.49 34.0723 122.49 36.7705C122.49 39.3823 120.312 41.5597 117.788 41.5597H113.433V68.9905C113.433 72.0419 110.995 74.4773 107.773 74.4773C104.725 74.4773 102.288 72.0419 102.288 68.9905V41.5597H99.5872C96.9742 41.5597 94.7968 39.3823 94.7968 36.5965C94.7968 34.0723 96.9742 31.8943 99.5872 31.8943H102.288V29.6298C102.288 20.4869 108.208 15 116.481 15C121.271 15 123.536 16.3053 123.536 19.4407C123.536 21.6188 122.142 23.7093 119.703 23.7093Z"
            fill={textColor || color}
          />
          <Path
            d="M175.611 58.628C173.782 56.1908 170.299 54.9725 166.729 54.9725C162.374 54.9725 158.804 57.2369 158.804 61.3297C158.804 65.248 162.374 67.5106 166.729 67.5106C170.299 67.5106 173.782 66.2911 175.611 63.8533V58.628ZM181.271 74.4773H180.4C179.529 74.4773 175.611 73.7797 175.611 69.6029C172.737 72.9981 167.773 74.9998 162.288 74.9998C155.581 74.9998 147.657 70.4727 147.657 61.067C147.657 51.2264 155.581 47.4821 162.288 47.4821C167.861 47.4821 172.823 49.3111 175.611 52.6216V46.959C175.611 42.6929 171.953 39.906 166.379 39.906C163.07 39.906 159.848 40.6905 156.975 42.6065C156.365 42.9538 155.668 43.2153 154.973 43.2153C152.969 43.2153 150.793 41.5598 150.793 38.948C150.793 38.1646 151.054 37.3794 151.402 36.7711C154.015 32.5901 163.419 30.8488 168.297 30.8488C177.875 30.8488 186.67 34.6812 186.67 46.7845V68.9905C186.67 72.0419 184.233 74.4773 181.271 74.4773Z"
            fill={textColor || color}
          />
          <Path
            d="M211.751 74.9998C204.002 74.9998 199.821 70.9945 199.821 63.5048V41.5597H197.122C194.51 41.5597 192.334 39.3828 192.334 36.5971C192.334 34.0723 194.51 31.8942 197.122 31.8942H199.821V25.363C199.821 22.3163 202.261 19.8774 205.483 19.8774C208.53 19.8774 210.968 22.3163 210.968 25.363V31.8942H215.323C217.848 31.8942 220.025 34.0723 220.025 36.771C220.025 39.3828 217.848 41.5597 215.323 41.5597H210.968V60.5445C210.968 63.8533 213.06 65.1603 214.801 65.1603H215.758C218.893 65.1603 220.635 67.249 220.635 69.9484C220.635 72.7383 218.981 74.9998 211.751 74.9998Z"
            fill={textColor || color}
          />
          <Path
            d="M259.998 70.8214C256.951 73.2598 252.597 75 246.674 75C233.699 75 224.381 65.8541 224.381 52.8822C224.381 39.9919 233.699 30.8483 246.674 30.8483C253.207 30.8483 259.301 33.1998 261.132 36.5967C261.479 37.2062 261.654 37.9038 261.654 38.5985C261.654 41.5599 258.865 43.3019 256.427 43.3019C255.383 43.3019 254.339 43.041 253.382 42.4321C251.55 41.2978 249.374 40.6901 247.196 40.6901C240.492 40.6901 235.789 45.5652 235.789 52.8822C235.789 60.1968 240.492 65.1606 247.196 65.1606C249.461 65.1606 251.55 64.5511 253.468 63.3316C254.424 62.7228 255.383 62.4583 256.427 62.4583C259.128 62.4583 261.738 64.3742 261.738 67.2493C261.738 68.5564 261.132 69.948 259.998 70.8214Z"
            fill={textColor || color}
          />
          <Path
            d="M304.5 74.4773C301.449 74.4773 299.012 72.0419 299.012 68.9905V48.3525C299.012 42.5171 295.964 40.6899 291.176 40.6899C286.907 40.6899 283.511 43.1283 281.594 45.6537V68.9905C281.594 72.0419 279.156 74.4773 276.021 74.4773C272.976 74.4773 270.538 72.0419 270.538 68.9905V20.7489C270.538 17.7875 272.976 15.3491 276.197 15.3491C279.156 15.3491 281.594 17.7875 281.594 20.7489V37.3793C284.296 34.1581 289.521 30.8487 296.398 30.8487C305.63 30.8487 310.072 35.9007 310.072 44.0869V68.9905C310.072 72.0419 307.636 74.4773 304.5 74.4773Z"
            fill={textColor || color}
          />
          <Path
            d="M340.724 41.7345C337.327 42.1705 334.106 43.5622 332.106 46.1758V68.99C332.106 72.042 329.667 74.4775 326.706 74.4775H326.532C323.482 74.4775 321.044 72.042 321.044 68.99V36.7707C321.044 33.8092 323.482 31.372 326.706 31.372C329.667 31.372 332.106 33.8092 332.106 36.7707V37.6428C334.195 34.8559 336.981 31.5459 341.159 31.5459C344.384 31.5459 346.036 33.5494 346.036 36.0742C346.036 39.3824 343.774 41.2984 340.724 41.7345Z"
            fill={textColor || color}
          />
        </>
      )}
    </Svg>
  );
};

LogoFlatchr.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  event: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  noEventRender: PropTypes.bool,
  height: PropTypes.number,
  with: PropTypes.number,
  textColor: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  onlyPaul: PropTypes.bool,
};

export default LogoFlatchr;
