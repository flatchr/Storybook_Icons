import React from 'react';
import Svg, { Path, G } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const IosShareIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (

    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G>
        <Path d="M10.0913 13.3333C9.85519 13.3333 9.65741 13.2533 9.49797 13.0933C9.33797 12.9339 9.25797 12.7361 9.25797 12.5V4.02083L8.50797 4.77083C8.35519 4.92361 8.16436 5 7.93547 5C7.70603 5 7.50797 4.91667 7.3413 4.75C7.18853 4.58333 7.11214 4.38528 7.11214 4.15583C7.11214 3.92694 7.18853 3.73611 7.3413 3.58333L9.50797 1.41667C9.57741 1.34722 9.66436 1.29167 9.7688 1.25C9.87269 1.20833 9.98019 1.1875 10.0913 1.1875C10.2024 1.1875 10.3102 1.20833 10.4146 1.25C10.5185 1.29167 10.6052 1.34722 10.6746 1.41667L12.8413 3.58333C13.008 3.75 13.0913 3.95139 13.0913 4.1875C13.0913 4.42361 13.008 4.61806 12.8413 4.77083C12.6746 4.92361 12.4769 5 12.248 5C12.0185 5 11.8274 4.92361 11.6746 4.77083L10.9246 4.02083V12.5C10.9246 12.7361 10.8449 12.9339 10.6855 13.0933C10.5255 13.2533 10.3274 13.3333 10.0913 13.3333ZM5.0913 19.1667C4.63297 19.1667 4.24075 19.0036 3.91464 18.6775C3.58797 18.3508 3.42464 17.9583 3.42464 17.5V8.33333C3.42464 7.875 3.58797 7.4825 3.91464 7.15583C4.24075 6.82972 4.63297 6.66667 5.0913 6.66667H6.75797C6.99408 6.66667 7.19214 6.74639 7.35214 6.90583C7.51158 7.06583 7.5913 7.26389 7.5913 7.5C7.5913 7.73611 7.51158 7.93389 7.35214 8.09333C7.19214 8.25333 6.99408 8.33333 6.75797 8.33333H5.0913V17.5H15.0913V8.33333H13.4246C13.1885 8.33333 12.9907 8.25333 12.8313 8.09333C12.6713 7.93389 12.5913 7.73611 12.5913 7.5C12.5913 7.26389 12.6713 7.06583 12.8313 6.90583C12.9907 6.74639 13.1885 6.66667 13.4246 6.66667H15.0913C15.5496 6.66667 15.9421 6.82972 16.2688 7.15583C16.5949 7.4825 16.758 7.875 16.758 8.33333V17.5C16.758 17.9583 16.5949 18.3508 16.2688 18.6775C15.9421 19.0036 15.5496 19.1667 15.0913 19.1667H5.0913Z"
              fill={color}
        />
      </G>
    </Svg>

  );
};

IosShareIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default IosShareIcon;
