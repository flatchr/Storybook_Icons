import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const EventDs2Icon = ({
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
        d="M15 18C14.3 18 13.7083 17.7583 13.225 17.275C12.7417 16.7917 12.5 16.2 12.5 15.5C12.5 14.8 12.7417 14.2083 13.225 13.725C13.7083 13.2417 14.3 13 15 13C15.7 13 16.2917 13.2417 16.775 13.725C17.2583 14.2083 17.5 14.8 17.5 15.5C17.5 16.2 17.2583 16.7917 16.775 17.275C16.2917 17.7583 15.7 18 15 18ZM5.5 22C4.95 22 4.479 21.8043 4.087 21.413C3.69567 21.021 3.5 20.55 3.5 20V6C3.5 5.45 3.69567 4.97933 4.087 4.588C4.479 4.196 4.95 4 5.5 4H6.5V3C6.5 2.71667 6.59567 2.479 6.787 2.287C6.979 2.09567 7.21667 2 7.5 2C7.78333 2 8.021 2.09567 8.213 2.287C8.40433 2.479 8.5 2.71667 8.5 3V4H16.5V3C16.5 2.71667 16.596 2.479 16.788 2.287C16.9793 2.09567 17.2167 2 17.5 2C17.7833 2 18.0207 2.09567 18.212 2.287C18.404 2.479 18.5 2.71667 18.5 3V4H19.5C20.05 4 20.521 4.196 20.913 4.588C21.3043 4.97933 21.5 5.45 21.5 6V20C21.5 20.55 21.3043 21.021 20.913 21.413C20.521 21.8043 20.05 22 19.5 22H5.5ZM5.5 20H19.5V10H5.5V20ZM5.5 8H19.5V6H5.5V8Z"
        fill={color}
      />
    </Svg>
  );
};

EventDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default EventDs2Icon;
