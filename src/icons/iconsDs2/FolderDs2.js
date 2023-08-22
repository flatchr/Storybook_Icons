import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FolderDs2Icon = ({
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
        d="M4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.696 19.021 2.5 18.55 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.47933 4.196 3.95 4 4.5 4H9.675C9.94167 4 10.196 4.05 10.438 4.15C10.6793 4.25 10.8917 4.39167 11.075 4.575L12.5 6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.3043 6.97933 22.5 7.45 22.5 8V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.521 19.8043 21.05 20 20.5 20H4.5ZM4.5 6V18H20.5V8H11.675L9.675 6H4.5Z"
        fill={color}
      />
    </svg>
  );
};

FolderDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FolderDs2Icon;
