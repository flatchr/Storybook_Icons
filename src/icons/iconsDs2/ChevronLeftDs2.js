import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ChevronLeftDs2Icon = ({
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
        d="M13.8 17.3L9.19999 12.7C9.09999 12.6 9.02932 12.4917 8.98799 12.375C8.94599 12.2583 8.92499 12.1333 8.92499 12C8.92499 11.8667 8.94599 11.7417 8.98799 11.625C9.02932 11.5083 9.09999 11.4 9.19999 11.3L13.8 6.7C13.9833 6.51667 14.2167 6.425 14.5 6.425C14.7833 6.425 15.0167 6.51667 15.2 6.7C15.3833 6.88334 15.475 7.11667 15.475 7.4C15.475 7.68334 15.3833 7.91667 15.2 8.1L11.3 12L15.2 15.9C15.3833 16.0833 15.475 16.3167 15.475 16.6C15.475 16.8833 15.3833 17.1167 15.2 17.3C15.0167 17.4833 14.7833 17.575 14.5 17.575C14.2167 17.575 13.9833 17.4833 13.8 17.3Z" 
        fill={color}
      />
    </svg>
  );
};

ChevronLeftDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ChevronLeftDs2Icon;
