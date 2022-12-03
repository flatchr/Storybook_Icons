import React from 'react';
import Svg, { Path, G } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const StayCurrentPortraitIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (

    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G>
        <Path d="M5.83333 19.1666C5.375 19.1666 4.98278 19.0035 4.65666 18.6774C4.33 18.3508 4.16666 17.9583 4.16666 17.4999V2.49992C4.16666 2.04159 4.33 1.64909 4.65666 1.32242C4.98278 0.996308 5.375 0.833252 5.83333 0.833252H14.1667C14.625 0.833252 15.0175 0.996308 15.3442 1.32242C15.6703 1.64909 15.8333 2.04159 15.8333 2.49992V17.4999C15.8333 17.9583 15.6703 18.3508 15.3442 18.6774C15.0175 19.0035 14.625 19.1666 14.1667 19.1666H5.83333ZM5.83333 16.6666V17.4999H14.1667V16.6666H5.83333ZM5.83333 14.9999H14.1667V4.99992H5.83333V14.9999ZM5.83333 3.33325H14.1667V2.49992H5.83333V3.33325Z"
              fill={color}
        />
      </G>
    </Svg>

  );
};

StayCurrentPortraitIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default StayCurrentPortraitIcon;
