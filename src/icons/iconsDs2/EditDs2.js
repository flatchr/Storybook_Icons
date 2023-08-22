import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const EditDs2Icon = ({
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
        d="M5.5 19H6.9L15.525 10.375L14.125 8.975L5.5 17.6V19ZM19.8 8.925L15.55 4.725L16.95 3.325C17.3333 2.94167 17.8043 2.75 18.363 2.75C18.921 2.75 19.3917 2.94167 19.775 3.325L21.175 4.725C21.5583 5.10833 21.7583 5.571 21.775 6.113C21.7917 6.65433 21.6083 7.11667 21.225 7.5L19.8 8.925ZM4.5 21C4.21667 21 3.97933 20.904 3.788 20.712C3.596 20.5207 3.5 20.2833 3.5 20V17.175C3.5 17.0417 3.525 16.9127 3.575 16.788C3.625 16.6627 3.7 16.55 3.8 16.45L14.1 6.15L18.35 10.4L8.05 20.7C7.95 20.8 7.83767 20.875 7.713 20.925C7.58767 20.975 7.45833 21 7.325 21H4.5Z"
        fill={color}
      />
    </svg>
  );
};

EditDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default EditDs2Icon;
