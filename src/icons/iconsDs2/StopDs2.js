import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const StopDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M8.5 18C7.95 18 7.47933 17.8043 7.088 17.413C6.696 17.021 6.5 16.55 6.5 16V8C6.5 7.45 6.696 6.97933 7.088 6.588C7.47933 6.196 7.95 6 8.5 6H16.5C17.05 6 17.521 6.196 17.913 6.588C18.3043 6.97933 18.5 7.45 18.5 8V16C18.5 16.55 18.3043 17.021 17.913 17.413C17.521 17.8043 17.05 18 16.5 18H8.5ZM8.5 16H16.5V8H8.5V16Z"
              fill={color}
        />
    </Svg>

  );
};

StopDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default StopDs2Icon;
