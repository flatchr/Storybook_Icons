import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

const CircleIcon = ({
  color = '#000000',
  height = null,
  width = null,
}) => {
  return (
    <Svg
      width={width || height || 16}
      height={height || width || 16}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
        fill={color}
      />
    </Svg>
  );
};

CircleIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default CircleIcon;
