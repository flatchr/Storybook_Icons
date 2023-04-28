import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CancelDs2Icon = ({
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
        d="M8.2 16.3C8.38333 16.4833 8.61667 16.575 8.9 16.575C9.18333 16.575 9.41667 16.4833 9.6 16.3L12.5 13.4L15.425 16.325C15.6083 16.5083 15.8377 16.5957 16.113 16.587C16.3877 16.579 16.6167 16.4833 16.8 16.3C16.9833 16.1167 17.075 15.8833 17.075 15.6C17.075 15.3167 16.9833 15.0833 16.8 14.9L13.9 12L16.825 9.075C17.0083 8.89167 17.0957 8.66233 17.087 8.387C17.079 8.11233 16.9833 7.88333 16.8 7.7C16.6167 7.51667 16.3833 7.425 16.1 7.425C15.8167 7.425 15.5833 7.51667 15.4 7.7L12.5 10.6L9.575 7.675C9.39167 7.49167 9.16267 7.404 8.888 7.412C8.61267 7.42067 8.38333 7.51667 8.2 7.7C8.01667 7.88333 7.925 8.11667 7.925 8.4C7.925 8.68333 8.01667 8.91667 8.2 9.1L11.1 12L8.175 14.925C7.99167 15.1083 7.90433 15.3373 7.913 15.612C7.921 15.8873 8.01667 16.1167 8.2 16.3ZM12.5 22C11.1167 22 9.81667 21.7373 8.6 21.212C7.38333 20.6873 6.325 19.975 5.425 19.075C4.525 18.175 3.81267 17.1167 3.288 15.9C2.76267 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.76267 9.31667 3.288 8.1C3.81267 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.31233 8.6 2.787C9.81667 2.26233 11.1167 2 12.5 2C13.8833 2 15.1833 2.26233 16.4 2.787C17.6167 3.31233 18.675 4.025 19.575 4.925C20.475 5.825 21.1873 6.88333 21.712 8.1C22.2373 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2373 14.6833 21.712 15.9C21.1873 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6873 16.4 21.212C15.1833 21.7373 13.8833 22 12.5 22ZM12.5 20C14.7167 20 16.6043 19.221 18.163 17.663C19.721 16.1043 20.5 14.2167 20.5 12C20.5 9.78333 19.721 7.89567 18.163 6.337C16.6043 4.779 14.7167 4 12.5 4C10.2833 4 8.396 4.779 6.838 6.337C5.27933 7.89567 4.5 9.78333 4.5 12C4.5 14.2167 5.27933 16.1043 6.838 17.663C8.396 19.221 10.2833 20 12.5 20Z"
        fill={color}
      />
    </Svg>
  );
};

CancelDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default CancelDs2Icon;