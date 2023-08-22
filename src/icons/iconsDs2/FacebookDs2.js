import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FacebookDs2Icon = ({
    color = "#4267B2",
    colorAdditionnal = "#FFFFFF",
    size = 24
}) => {

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" width="24" height="24" rx="12"
        fill={color}
      />
      <path d="M13.3012 19.9999V12.7016H15.751L16.1178 9.85726H13.3012V8.04126C13.3012 7.21779 13.5299 6.65655 14.7109 6.65655L16.2171 6.65585V4.11195C15.9564 4.07742 15.0624 4 14.0223 4C11.8508 4 10.3641 5.32545 10.3641 7.75971V9.85733H7.90796V12.7016H10.364V20L13.3012 19.9999Z"
        fill={colorAdditionnal}
      />
    </svg>
  );
};

FacebookDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FacebookDs2Icon;
