import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FormatUnderlineDs2Icon = ({
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
        d="M6.5 21C6.21667 21 5.979 20.904 5.787 20.712C5.59567 20.5207 5.5 20.2833 5.5 20C5.5 19.7167 5.59567 19.4793 5.787 19.288C5.979 19.096 6.21667 19 6.5 19H18.5C18.7833 19 19.0207 19.096 19.212 19.288C19.404 19.4793 19.5 19.7167 19.5 20C19.5 20.2833 19.404 20.5207 19.212 20.712C19.0207 20.904 18.7833 21 18.5 21H6.5ZM12.5 17C10.8167 17 9.39567 16.4207 8.237 15.262C7.079 14.104 6.5 12.6833 6.5 11V4.25C6.5 3.9 6.621 3.604 6.863 3.362C7.10433 3.12067 7.4 3 7.75 3C8.1 3 8.39567 3.12067 8.637 3.362C8.879 3.604 9 3.9 9 4.25V11C9 11.9833 9.33733 12.8127 10.012 13.488C10.6873 14.1627 11.5167 14.5 12.5 14.5C13.4833 14.5 14.3127 14.1627 14.988 13.488C15.6627 12.8127 16 11.9833 16 11V4.25C16 3.9 16.121 3.604 16.363 3.362C16.6043 3.12067 16.9 3 17.25 3C17.6 3 17.896 3.12067 18.138 3.362C18.3793 3.604 18.5 3.9 18.5 4.25V11C18.5 12.6833 17.9207 14.104 16.762 15.262C15.604 16.4207 14.1833 17 12.5 17Z" 
        fill={color}
      />
    </svg>
  );
};

FormatUnderlineDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FormatUnderlineDs2Icon;
