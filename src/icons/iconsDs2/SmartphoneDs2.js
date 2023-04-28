import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SmartphoneDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M7.5 23C6.95 23 6.47933 22.8043 6.088 22.413C5.696 22.021 5.5 21.55 5.5 21V3C5.5 2.45 5.696 1.979 6.088 1.587C6.47933 1.19567 6.95 1 7.5 1H17.5C18.05 1 18.521 1.19567 18.913 1.587C19.3043 1.979 19.5 2.45 19.5 3V21C19.5 21.55 19.3043 22.021 18.913 22.413C18.521 22.8043 18.05 23 17.5 23H7.5ZM7.5 20V21H17.5V20H7.5ZM7.5 18H17.5V6H7.5V18ZM7.5 4H17.5V3H7.5V4Z"
              fill={color}
        />
    </Svg>

  );
};

SmartphoneDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default SmartphoneDs2Icon;
