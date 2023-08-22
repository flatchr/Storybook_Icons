import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const RefreshDs2Icon = ({
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
        d="M12.5 20C10.2667 20 8.375 19.225 6.825 17.675C5.275 16.125 4.5 14.2333 4.5 12C4.5 9.76667 5.275 7.875 6.825 6.325C8.375 4.775 10.2667 4 12.5 4C13.65 4 14.75 4.23767 15.8 4.713C16.85 5.18767 17.75 5.86667 18.5 6.75V5C18.5 4.71667 18.596 4.479 18.788 4.287C18.9793 4.09567 19.2167 4 19.5 4C19.7833 4 20.0207 4.09567 20.212 4.287C20.404 4.479 20.5 4.71667 20.5 5V10C20.5 10.2833 20.404 10.5207 20.212 10.712C20.0207 10.904 19.7833 11 19.5 11H14.5C14.2167 11 13.9793 10.904 13.788 10.712C13.596 10.5207 13.5 10.2833 13.5 10C13.5 9.71667 13.596 9.479 13.788 9.287C13.9793 9.09567 14.2167 9 14.5 9H17.7C17.1667 8.06667 16.4377 7.33333 15.513 6.8C14.5877 6.26667 13.5833 6 12.5 6C10.8333 6 9.41667 6.58333 8.25 7.75C7.08333 8.91667 6.5 10.3333 6.5 12C6.5 13.6667 7.08333 15.0833 8.25 16.25C9.41667 17.4167 10.8333 18 12.5 18C13.65 18 14.7127 17.6957 15.688 17.087C16.6627 16.479 17.3917 15.6667 17.875 14.65C17.9583 14.4667 18.096 14.3127 18.288 14.188C18.4793 14.0627 18.675 14 18.875 14C19.2583 14 19.546 14.1333 19.738 14.4C19.9293 14.6667 19.95 14.9667 19.8 15.3C19.1667 16.7167 18.1917 17.854 16.875 18.712C15.5583 19.5707 14.1 20 12.5 20Z"
        fill={color}
      />
    </svg>
  );
};

RefreshDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default RefreshDs2Icon;
