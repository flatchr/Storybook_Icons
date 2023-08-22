import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const DraftDs2Icon = ({
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
        d="M6.5 22C5.95 22 5.47933 21.8043 5.088 21.413C4.696 21.021 4.5 20.55 4.5 20V4C4.5 3.45 4.696 2.979 5.088 2.587C5.47933 2.19567 5.95 2 6.5 2H13.675C13.9417 2 14.196 2.05 14.438 2.15C14.6793 2.25 14.8917 2.39167 15.075 2.575L19.925 7.425C20.1083 7.60833 20.25 7.82067 20.35 8.062C20.45 8.304 20.5 8.55833 20.5 8.825V20C20.5 20.55 20.3043 21.021 19.913 21.413C19.521 21.8043 19.05 22 18.5 22H6.5ZM13.5 8V4H6.5V20H18.5V9H14.5C14.2167 9 13.9793 8.904 13.788 8.712C13.596 8.52067 13.5 8.28333 13.5 8Z" 
        fill={color}
      />
    </svg>
  );
};

DraftDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default DraftDs2Icon;
