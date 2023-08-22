import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ForumDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 15.8V3C2.5 2.71667 2.596 2.479 2.788 2.287C2.97933 2.09567 3.21667 2 3.5 2H16.5C16.7833 2 17.0207 2.09567 17.212 2.287C17.404 2.479 17.5 2.71667 17.5 3V12C17.5 12.2833 17.404 12.5207 17.212 12.712C17.0207 12.904 16.7833 13 16.5 13H6.5L3.35 16.15C3.18333 16.3167 3 16.3583 2.8 16.275C2.6 16.1917 2.5 16.0333 2.5 15.8ZM7.5 18C7.21667 18 6.979 17.904 6.787 17.712C6.59567 17.5207 6.5 17.2833 6.5 17V15H19.5V6H21.5C21.7833 6 22.0207 6.09567 22.212 6.287C22.404 6.479 22.5 6.71667 22.5 7V20.8C22.5 21.0333 22.4 21.1917 22.2 21.275C22 21.3583 21.8167 21.3167 21.65 21.15L18.5 18H7.5ZM15.5 4H4.5V11H15.5V4Z"
        fill={color}
      />
    </svg>
  );
};

ForumDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ForumDs2Icon;
