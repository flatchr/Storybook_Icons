import React from 'react';
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ErrorIcon = ({
  color = theme.colors.textPrimary,
  width = null,
  height = null,
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
        fill="none"
        d="M0 0h24v24H0z"
        stroke="none"
      />
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        stroke="none"
        fill={color}
      />
    </Svg>
  );
};

ErrorIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default ErrorIcon;
