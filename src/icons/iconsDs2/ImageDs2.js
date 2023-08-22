import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ImageDs2Icon = ({
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
        d="M7.5 17H17.5C17.7 17 17.85 16.9083 17.95 16.725C18.05 16.5417 18.0333 16.3667 17.9 16.2L15.15 12.525C15.05 12.3917 14.9167 12.325 14.75 12.325C14.5833 12.325 14.45 12.3917 14.35 12.525L11.75 16L9.9 13.525C9.8 13.3917 9.66667 13.325 9.5 13.325C9.33333 13.325 9.2 13.3917 9.1 13.525L7.1 16.2C6.96667 16.3667 6.95 16.5417 7.05 16.725C7.15 16.9083 7.3 17 7.5 17ZM5.5 21C4.95 21 4.479 20.8043 4.087 20.413C3.69567 20.021 3.5 19.55 3.5 19V5C3.5 4.45 3.69567 3.979 4.087 3.587C4.479 3.19567 4.95 3 5.5 3H19.5C20.05 3 20.521 3.19567 20.913 3.587C21.3043 3.979 21.5 4.45 21.5 5V19C21.5 19.55 21.3043 20.021 20.913 20.413C20.521 20.8043 20.05 21 19.5 21H5.5ZM5.5 19H19.5V5H5.5V19Z" 
        fill={color}
      />
    </svg>
  );
};

ImageDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ImageDs2Icon;
