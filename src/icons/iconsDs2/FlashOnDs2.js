import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FlashOnDs2Icon = ({
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
        d="M11.425 21.4C11.2917 21.6333 11.1043 21.7123 10.863 21.637C10.621 21.5623 10.5 21.4 10.5 21.15V14H8.5C8.21667 14 7.979 13.904 7.787 13.712C7.59567 13.5207 7.5 13.2833 7.5 13V3C7.5 2.71667 7.59567 2.479 7.787 2.287C7.979 2.09567 8.21667 2 8.5 2H15.95C16.3167 2 16.6 2.15 16.8 2.45C17 2.75 17.025 3.06667 16.875 3.4L13.5 11H15.75C16.1333 11 16.425 11.1667 16.625 11.5C16.825 11.8333 16.825 12.1667 16.625 12.5L11.425 21.4Z"
        fill={color}
      />
    </Svg>
  );
};

FlashOnDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FlashOnDs2Icon;
