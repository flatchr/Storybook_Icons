import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const GoogleHangoutsIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (
    <Svg
      width={width || height || 16}
      height={height || width || 16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 0C6.2 0 1.5 4.7 1.5 10.5c0 5.5 5 10 10.5 10V24c6.35-3.1 10.5-8.2 10.5-13.5C22.5 4.7 17.8 0 12 0zm-.5 12c0 1.4-.9 2.5-2 2.5V12H7V7.5h4.5V12zm6 0c0 1.4-.9 2.5-2 2.5V12H13V7.5h4.5V12z"
        fill={color}
      />
    </Svg>
  );
};

GoogleHangoutsIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default GoogleHangoutsIcon;
