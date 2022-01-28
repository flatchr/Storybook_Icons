import React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';
import { date } from '@flatchr/helper';

const stylePathDropShadow = {
  style: {
    filter: 'drop-shadow(rgba(10, 31, 51, 0.4) -57px 29px 33px)'
  }
};

const RenderEvent = ({ event }) => {
  if (event === 'prideMonth' || event === 'saintValentine') {
    const isSaintValentineEvent = event === 'saintValentine';
    return (
      <G
        rotation={18}
        scale={0.065}
        translate="38,25"
        {...stylePathDropShadow}
      >
        <Path
          d="M251.332 420.609C251.332 420.609 296.591 394.083 348.517 353.313H154.148C206.075 394.083 251.332 420.609 251.332 420.609"
          fill={isSaintValentineEvent ? '#F00020' : '#68329A'}
        />
        <Path
          d="M154.148 353.313H348.517C374.869 332.624 402.936 308.268 427.68 281.845H74.9867C99.7307 308.268 127.797 332.624 154.148 353.313"
          fill={isSaintValentineEvent ? '#F00020' : '#385FB5'}
        />
        <Path
          d="M74.9867 281.845H427.68C448.885 259.201 467.648 235.043 480.793 210.376H21.8729C35.0188 235.043 53.7813 259.201 74.9867 281.845"
          fill={isSaintValentineEvent ? '#F00020' : '#11AB51'}
        />
        <Path
          d="M4.36506 162.664C7.34586 178.599 13.4599 194.592 21.8729 210.376H480.793C489.207 194.592 495.32 178.599 498.3 162.664C499.817 154.555 500.84 146.628 501.373 138.908H1.29266C1.82653 146.628 2.84839 154.555 4.36506 162.664Z"
          fill={isSaintValentineEvent ? '#F00020' : '#FEE314'}
        />
        <Path
          d="M1.29265 138.908H501.373C503.224 112.167 499.141 87.936 488.836 67.4387H13.8312C3.52545 87.936 -0.557351 112.167 1.29265 138.908Z"
          fill={isSaintValentineEvent ? '#F00020' : '#F3622A'}
        />
        <Path
          d="M383.963 1.68137C289.749 -12.0386 251.332 65.6654 251.332 65.6654C251.332 65.6654 212.916 -12.0386 118.703 1.68137C65.544 9.4227 31.0292 33.2347 13.8312 67.4387H488.836C471.639 33.2347 437.123 9.4227 383.963 1.68137"
          fill={isSaintValentineEvent ? '#F00020' : '#EE2544'}
        />
      </G>
    );
  }
  if (event === 'saintPatrick') {
    return (
      <G
        scale={0.047}
        translate="36,23"
      >
        <Path
          {...stylePathDropShadow}
          fill="#00A651"
          d="M138.6,164.2c1.4-42,51.5-67.9,88.5-69.7c24.1-1.2,46.8-6.3,64.7-24.4C306,55.7,324,48.4,343.4,44.8    c15.5-2.8,31.7-5.2,46.5,1.2c24.5,10.7,38,31.6,45.3,56.3c12.6,43.5,0,84-13.5,125.5c-2.1,6.6-18.1,45.9,3.9,39.9    c8.1-2.2,12.6-17.8,16.4-24.4c14.7-25.2,27.4-51.7,47.9-73.2c12.8-13.5,27.7-23.6,44.9-30.1c31.3-11.8,66.8-11,88.7,18.1    c15,19.9,25,40.8,24.9,66.1c-0.1,26,10.3,43.5,25.9,62.9c14.7,18.4,23.3,41.5,24.6,65c1.5,28.6-8.8,50.4-33.7,65.3    c-18.6,11.2-39.4,17-61.6,16.7c-26.9-0.3-52.4-7.6-77.8-15.3c-10.9-3.3-21.5-7.6-32.3-11.4c-4-1.4-9.5-3.6-11.5,1.3    c-3.3,7.9,32.6,18.6,38.4,21.2c16.6,7.1,33.2,14.6,48.9,23.6c16.5,9.4,31.6,21.1,42.5,36c9.2,12.6,15.7,27.9,18.8,43.9    c4.8,24.5-0.8,46.5-19.5,63.2c-20.3,18.1-43.8,30-72,32.2c-16.7,1.4-31.2,10.2-42.6,22.4c-16.9,18.2-35.5,33-60.4,38.2    c-15.7,3.3-31.7,7.7-47.1,0c-35.4-17.8-50.7-48.9-54.3-86.4c-3-30.7,3.1-60.8,9.7-90.7c2.4-10.8,5.6-21.5,8.3-32.2    c0.9-3.8,0.6-7.9-3.5-9.5c-2.8-1.1-3.9,0.1-5.8,1.8c-5.5,5.1-7.6,20.6-10.3,27.7c-3.8,9.8-7.8,19.6-12.2,29.2    c-8.7,19.2-18.6,37.8-29.7,55.7c-22.1,35.6-49.2,68.2-81.4,95.1C192.3,695,171.2,708.8,148,708c-8.9-0.3-18.2-3.1-24-9.9    c-5.8-6.8-6.5-18.2,0-24.2c3.3-3,7.8-4.3,12-5.6c13.9-4.3,27.4-9.8,40.4-16.5c71.6-36.6,117.5-103.4,143.3-177.7    c1.3-3.9,3.3-9.1-2.1-11.4c-4.8-2-6.8,2.6-9,6c-15.4,23.9-32.1,46.7-50.7,68.2c-24.2,28-53.5,46.3-91.3,48.1    c-18.6,0.9-37.3-0.6-50.5-15.4c-20.8-23.2-34.3-49.9-30-82.4c2.8-21.4-0.2-41.7-11.9-59.8c-22.4-34.7-34.3-77.2-10-114.6    c14.2-21.8,45.1-30.1,69.5-32.6c20.8-2.1,41.2,3,60.7,10c18.5,6.7,35.5,16.7,53.9,23.1c2.7,0.9,22.4,7.4,17.4-1.5    c-0.7-1.2-1.9-2.1-3-2.9c-19.2-13.8-40.9-24.1-60.7-37c-16.5-10.7-32.2-22.6-42.9-39.9c-7.3-11.8-13.3-24.8-16.9-38.3    C139.6,184.2,138.3,174.3,138.6,164.2z"
        />
      </G>
    )
  }
  if (event === 'easter') {
    return(
      <G
        rotation={18}
        scale={0.085}
        translate="45,30"
        {...stylePathDropShadow}
      >
        <Path 
          fill="#FFDF96"
          d="M381.23,384.488H130.772l-24.461,38.458C141.007,484.581,199.434,512,256.001,512   s114.994-27.419,149.69-89.054L381.23,384.488z"
        />
	      <Path 
          fill="#FFDF96"
          d="M256.001,0c-44.497,0-90.643,32.714-125.229,85.875l16.18,32.339h220.532l13.745-32.338   C346.643,32.714,300.497,0,256.001,0z"
        />
        <Path 
          fill= "#b7d5ac" 
          d="M417.926,163.456l-50.442-45.242H146.953l-52.877,45.242c-12.12,36.912-19.236,78.278-19.236,122.187  c0,29.986,3.282,56.694,9.196,80.303l77.618,29.831h191.127l75.183-29.831c5.914-23.607,9.196-50.316,9.196-80.303  C437.162,241.734,430.046,200.368,417.926,163.456z"
        />
        <Path 
          fill="#FF7B78"
          d="M333.02,108.08c-4.351,4.372-8.907,5.29-11.962,5.29c-3.056,0-7.612-0.918-11.963-5.29   c-14.368-14.435-33.223-22.386-53.096-22.386c-19.872,0-38.728,7.951-53.095,22.386c-4.351,4.372-8.906,5.29-11.962,5.29   c-3.056,0-7.611-0.918-11.962-5.289c-13.183-13.247-30.15-21.012-48.209-22.205c-14.641,22.504-27.205,48.672-36.697,77.581   c7.215-3.646,13.919-8.479,19.849-14.437c4.353-4.372,8.907-5.29,11.962-5.29c3.055,0,7.611,0.918,11.962,5.292   c14.367,14.435,33.223,22.385,53.095,22.385s38.728-7.949,53.096-22.386c4.351-4.372,8.906-5.29,11.961-5.29   s7.611,0.918,11.962,5.292c14.368,14.435,33.224,22.385,53.096,22.385c19.871,0,38.727-7.949,53.095-22.385   c4.351-4.373,8.907-5.29,11.963-5.29c3.055,0,7.609,0.918,11.961,5.292c5.93,5.958,12.634,10.791,19.849,14.437   c-9.492-28.909-22.056-55.076-36.697-77.581C363.171,87.068,346.203,94.834,333.02,108.08z"
        />
	      <Path 
          fill="#FF7B78" 
          d="M386.116,352.921L386.116,352.921c-19.872,0-38.729,7.951-53.095,22.385   c-4.353,4.372-8.908,5.29-11.963,5.29c-3.056,0-7.612-0.918-11.963-5.29c-14.368-14.436-33.223-22.385-53.096-22.385   c-19.872,0-38.728,7.949-53.095,22.385c-4.351,4.372-8.907,5.29-11.962,5.29c-3.055,0-7.611-0.918-11.962-5.29   c-14.367-14.435-33.223-22.385-53.095-22.385c-0.001,0,0,0,0,0c-15.033,0-29.482,4.558-41.849,13.024   c5.396,21.54,12.983,40.498,22.275,57.002c2.65-2.052,5.2-4.277,7.613-6.701c4.353-4.373,8.907-5.29,11.962-5.29   c3.055,0,7.611,0.917,11.963,5.29c14.367,14.435,33.223,22.385,53.095,22.385s38.728-7.951,53.096-22.385   c4.351-4.373,8.906-5.29,11.961-5.29c3.055,0,7.611,0.917,11.963,5.29c14.367,14.435,33.223,22.385,53.095,22.385   c19.871,0,38.727-7.951,53.095-22.385c4.351-4.373,8.907-5.29,11.963-5.29c3.055,0,7.609,0.917,11.962,5.29   c2.413,2.425,4.963,4.65,7.613,6.701c9.29-16.504,16.877-35.461,22.273-57.001C415.599,357.478,401.151,352.921,386.116,352.921z"
        />
        <Circle 
          fill="#FFDF96" 
          cx="143.739" 
          cy="263.659" 
          r="32.318"
        />
        <Circle 
          fill="#FFFFFF" 
          cx="256" 
          cy="263.659" 
          r="32.318"
        />
        <Circle 
          fill="#FFDF96" 
          cx="368.272" 
          cy="263.659" 
          r="32.318"
        />
      </G>
    )
  }
  return null;
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
      viewBox={`0 0 ${onlyPaul ? '75 90' : '347 90'}`}
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
