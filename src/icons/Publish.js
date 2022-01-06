import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

const PublishIcon = ({
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
        d="M0 0h24v24H0z"
        fill="none"
      />
      <Path
        d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"
        fill={color}
      />
    </Svg>
  );
};

PublishIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default PublishIcon;
