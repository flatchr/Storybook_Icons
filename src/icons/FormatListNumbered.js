import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

const FormatListNumberedIcon = ({
  color = '#000000',
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
        d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"
        fill={color}
      />
    </Svg>
  );
};

FormatListNumberedIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default FormatListNumberedIcon;
