import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const GridOnDs2Icon = ({
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
        d="M4.5 22C3.95 22 3.47933 21.8043 3.088 21.413C2.696 21.021 2.5 20.55 2.5 20V4C2.5 3.45 2.696 2.979 3.088 2.587C3.47933 2.19567 3.95 2 4.5 2H20.5C21.05 2 21.521 2.19567 21.913 2.587C22.3043 2.979 22.5 3.45 22.5 4V20C22.5 20.55 22.3043 21.021 21.913 21.413C21.521 21.8043 21.05 22 20.5 22H4.5ZM4.5 16V20H8.5V16H4.5ZM10.5 16V20H14.5V16H10.5ZM16.5 20H20.5V16H16.5V20ZM4.5 14H8.5V10H4.5V14ZM10.5 14H14.5V10H10.5V14ZM16.5 14H20.5V10H16.5V14ZM8.5 4H4.5V8H8.5V4ZM10.5 8H14.5V4H10.5V8ZM16.5 8H20.5V4H16.5V8Z"
        fill={color}
      />
    </Svg>
  );
};

GridOnDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default GridOnDs2Icon;
