import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SendDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 18.5V5.49999C3.5 5.13333 3.65 4.85399 3.95 4.66199C4.24 4.47066 4.56667 4.44166 4.9 4.57499L20.3 11.075C20.7167 11.2583 20.925 11.5667 20.925 12C20.925 12.4333 20.7167 12.7417 20.3 12.925L4.9 19.425C4.56667 19.5583 4.24 19.529 3.95 19.337C3.65 19.1457 3.5 18.8667 3.5 18.5ZM5.5 17L17.35 12L5.5 6.99999V10.5L11.5 12L5.5 13.5V17Z"
              fill={color}
        />
    </svg>

  );
};

SendDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default SendDs2Icon;
