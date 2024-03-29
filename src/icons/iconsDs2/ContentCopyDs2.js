import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ContentCopyDs2Icon = ({
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
        d="M9.5 18C8.95 18 8.47933 17.8043 8.088 17.413C7.696 17.021 7.5 16.55 7.5 16V4C7.5 3.45 7.696 2.979 8.088 2.587C8.47933 2.19567 8.95 2 9.5 2H18.5C19.05 2 19.521 2.19567 19.913 2.587C20.3043 2.979 20.5 3.45 20.5 4V16C20.5 16.55 20.3043 17.021 19.913 17.413C19.521 17.8043 19.05 18 18.5 18H9.5ZM9.5 16H18.5V4H9.5V16ZM5.5 22C4.95 22 4.479 21.8043 4.087 21.413C3.69567 21.021 3.5 20.55 3.5 20V7C3.5 6.71667 3.596 6.479 3.788 6.287C3.97933 6.09567 4.21667 6 4.5 6C4.78333 6 5.021 6.09567 5.213 6.287C5.40433 6.479 5.5 6.71667 5.5 7V20H15.5C15.7833 20 16.021 20.096 16.213 20.288C16.4043 20.4793 16.5 20.7167 16.5 21C16.5 21.2833 16.4043 21.5207 16.213 21.712C16.021 21.904 15.7833 22 15.5 22H5.5Z" 
        fill={color}
      />
    </svg>
  );
};

ContentCopyDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ContentCopyDs2Icon;
