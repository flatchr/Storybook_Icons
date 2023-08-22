import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FolderOpenDs2Icon = ({
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
        d="M4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.696 19.021 2.5 18.55 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.47933 4.196 3.95 4 4.5 4H9.675C9.94167 4 10.196 4.05 10.438 4.15C10.6793 4.25 10.8917 4.39167 11.075 4.575L12.5 6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.3043 6.97933 22.5 7.45 22.5 8H11.675L9.675 6H4.5V18L6.475 11.425C6.60833 10.9917 6.85433 10.6457 7.213 10.387C7.571 10.129 7.96667 10 8.4 10H21.3C21.9833 10 22.521 10.2707 22.913 10.812C23.3043 11.354 23.4083 11.9417 23.225 12.575L21.425 18.575C21.2917 19.0083 21.046 19.3543 20.688 19.613C20.3293 19.871 19.9333 20 19.5 20H4.5ZM6.6 18H19.5L21.3 12H8.4L6.6 18Z"
        fill={color}
      />
    </svg>
  );
};

FolderOpenDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FolderOpenDs2Icon;
