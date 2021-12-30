import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

const List = ({
  color = '#000000',
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
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
        fill={color}
      />
    </Svg>
  );
};

List.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default List;
