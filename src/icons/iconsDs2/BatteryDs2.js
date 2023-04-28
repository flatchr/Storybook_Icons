import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const BatteryDs2Icon = ({
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
        d="M22.5 16C22.5 16.2833 22.404 16.5207 22.212 16.712C22.0207 16.904 21.7833 17 21.5 17H5.5C5.21667 17 4.979 16.904 4.787 16.712C4.59567 16.5207 4.5 16.2833 4.5 16V14H3.5C3.21667 14 2.97933 13.904 2.788 13.712C2.596 13.5207 2.5 13.2833 2.5 13V11C2.5 10.7167 2.596 10.479 2.788 10.287C2.97933 10.0957 3.21667 10 3.5 10H4.5V8C4.5 7.71667 4.59567 7.479 4.787 7.287C4.979 7.09567 5.21667 7 5.5 7H21.5C21.7833 7 22.0207 7.09567 22.212 7.287C22.404 7.479 22.5 7.71667 22.5 8V16ZM10.5 15V9H6.5V15H10.5Z"
        fill={color}
      />
    </Svg>
  );
};

BatteryDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default BatteryDs2Icon;
