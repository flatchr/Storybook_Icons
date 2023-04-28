import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PlayArrowDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.025 18.0251C9.69167 18.2417 9.354 18.2541 9.012 18.0621C8.67067 17.8707 8.5 17.5751 8.5 17.1751V6.82508C8.5 6.42508 8.67067 6.12908 9.012 5.93708C9.354 5.74575 9.69167 5.75841 10.025 5.97508L18.175 11.1501C18.475 11.3501 18.625 11.6334 18.625 12.0001C18.625 12.3667 18.475 12.6501 18.175 12.8501L10.025 18.0251ZM10.5 15.3501L15.75 12.0001L10.5 8.65008V15.3501Z"
        fill="#2B435E"
      />
    </Svg>
  );
};

PlayArrowDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PlayArrowDs2Icon;
