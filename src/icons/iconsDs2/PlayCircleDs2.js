import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PlayCircleDs2Icon = ({
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
        d="M10 9.325V14.675C10 15.075 10.175 15.3667 10.525 15.55C10.875 15.7333 11.2167 15.7167 11.55 15.5L15.7 12.85C16.0167 12.6667 16.175 12.3833 16.175 12C16.175 11.6167 16.0167 11.3333 15.7 11.15L11.55 8.5C11.2167 8.28333 10.875 8.26667 10.525 8.45C10.175 8.63333 10 8.925 10 9.325ZM12.5 22C11.1167 22 9.81667 21.7373 8.6 21.212C7.38333 20.6873 6.325 19.975 5.425 19.075C4.525 18.175 3.81267 17.1167 3.288 15.9C2.76267 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.76267 9.31667 3.288 8.1C3.81267 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.31233 8.6 2.787C9.81667 2.26233 11.1167 2 12.5 2C13.8833 2 15.1833 2.26233 16.4 2.787C17.6167 3.31233 18.675 4.025 19.575 4.925C20.475 5.825 21.1873 6.88333 21.712 8.1C22.2373 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2373 14.6833 21.712 15.9C21.1873 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6873 16.4 21.212C15.1833 21.7373 13.8833 22 12.5 22ZM12.5 20C14.7167 20 16.6043 19.221 18.163 17.663C19.721 16.1043 20.5 14.2167 20.5 12C20.5 9.78333 19.721 7.89567 18.163 6.337C16.6043 4.779 14.7167 4 12.5 4C10.2833 4 8.396 4.779 6.838 6.337C5.27933 7.89567 4.5 9.78333 4.5 12C4.5 14.2167 5.27933 16.1043 6.838 17.663C8.396 19.221 10.2833 20 12.5 20Z"
        fill={color}
      />
    </Svg>
  );
};

PlayCircleDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PlayCircleDs2Icon;