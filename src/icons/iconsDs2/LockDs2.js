import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const LockDs2Icon = ({
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
        d="M6.5 22C5.95 22 5.47933 21.8043 5.088 21.413C4.696 21.021 4.5 20.55 4.5 20V10C4.5 9.45 4.696 8.979 5.088 8.587C5.47933 8.19567 5.95 8 6.5 8H7.5V6C7.5 4.61667 7.98767 3.43733 8.963 2.462C9.93767 1.48733 11.1167 1 12.5 1C13.8833 1 15.0627 1.48733 16.038 2.462C17.0127 3.43733 17.5 4.61667 17.5 6V8H18.5C19.05 8 19.521 8.19567 19.913 8.587C20.3043 8.979 20.5 9.45 20.5 10V20C20.5 20.55 20.3043 21.021 19.913 21.413C19.521 21.8043 19.05 22 18.5 22H6.5ZM6.5 20H18.5V10H6.5V20ZM12.5 17C13.05 17 13.521 16.8043 13.913 16.413C14.3043 16.021 14.5 15.55 14.5 15C14.5 14.45 14.3043 13.979 13.913 13.587C13.521 13.1957 13.05 13 12.5 13C11.95 13 11.4793 13.1957 11.088 13.587C10.696 13.979 10.5 14.45 10.5 15C10.5 15.55 10.696 16.021 11.088 16.413C11.4793 16.8043 11.95 17 12.5 17ZM9.5 8H15.5V6C15.5 5.16667 15.2083 4.45833 14.625 3.875C14.0417 3.29167 13.3333 3 12.5 3C11.6667 3 10.9583 3.29167 10.375 3.875C9.79167 4.45833 9.5 5.16667 9.5 6V8Z"
        fill={color}
      />
    </Svg>
  );
};

LockDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default LockDs2Icon;
