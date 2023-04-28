import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const RateReviewDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11 14H17.5C17.7833 14 18.0207 13.904 18.212 13.712C18.404 13.5207 18.5 13.2833 18.5 13C18.5 12.7167 18.404 12.479 18.212 12.287C18.0207 12.0957 17.7833 12 17.5 12H13L11 14ZM7 14H8.55C8.68333 14 8.80833 13.9707 8.925 13.912C9.04167 13.854 9.15 13.7833 9.25 13.7L14.85 8.15C14.95 8.05 15 7.925 15 7.775C15 7.625 14.95 7.5 14.85 7.4L13.1 5.65C13 5.55 12.875 5.5 12.725 5.5C12.575 5.5 12.45 5.55 12.35 5.65L6.8 11.25C6.71667 11.35 6.646 11.4583 6.588 11.575C6.52933 11.6917 6.5 11.8167 6.5 11.95V13.5C6.5 13.6333 6.55 13.75 6.65 13.85C6.75 13.95 6.86667 14 7 14ZM2.5 19.575V4C2.5 3.45 2.696 2.979 3.088 2.587C3.47933 2.19567 3.95 2 4.5 2H20.5C21.05 2 21.521 2.19567 21.913 2.587C22.3043 2.979 22.5 3.45 22.5 4V16C22.5 16.55 22.3043 17.021 21.913 17.413C21.521 17.8043 21.05 18 20.5 18H6.5L4.2 20.3C3.88333 20.6167 3.52067 20.6873 3.112 20.512C2.704 20.3373 2.5 20.025 2.5 19.575ZM4.5 17.175L5.675 16H20.5V4H4.5V17.175Z"
        fill={color}
      />
    </Svg>
  );
};

RateReviewDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default RateReviewDs2Icon;
