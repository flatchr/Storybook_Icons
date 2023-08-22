import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const LandscapeDs2Icon = ({
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
        d="M3.49999 18C3.08332 18 2.78332 17.8167 2.59999 17.45C2.41666 17.0834 2.44999 16.7334 2.69999 16.4L6.69999 11.075C6.89999 10.8084 7.16666 10.675 7.49999 10.675C7.83332 10.675 8.09999 10.8084 8.29999 11.075L12 16H19.5L14.5 9.35005L12 12.65L10.75 11L13.7 7.07505C13.9 6.80838 14.1667 6.67505 14.5 6.67505C14.8333 6.67505 15.1 6.80838 15.3 7.07505L22.3 16.4C22.55 16.7334 22.5833 17.0834 22.4 17.45C22.2167 17.8167 21.9167 18 21.5 18H3.49999ZM5.49999 16H9.49999L7.49999 13.325L5.49999 16Z"
        fill={color}
      />
    </svg>
  );
};

LandscapeDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default LandscapeDs2Icon;
