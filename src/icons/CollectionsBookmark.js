import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CollectionsBookmarkIcon = ({
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
      <Path fill="none" d="M0 0h24v24H0V0z" />
      <Path fill="none" d="M0 0h24v24H0V0z" />
      <Path
        d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"
        fill={color}
      />
      <Path
        d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"
        fill={color}
      />
    </Svg>
  );
};

CollectionsBookmarkIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default CollectionsBookmarkIcon;
