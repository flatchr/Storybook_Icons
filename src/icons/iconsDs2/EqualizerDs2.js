import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const EqualizerDs2Icon = ({
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
        d="M6.5 20C5.95 20 5.47933 19.8043 5.088 19.413C4.696 19.021 4.5 18.55 4.5 18V14C4.5 13.45 4.696 12.979 5.088 12.587C5.47933 12.1957 5.95 12 6.5 12C7.05 12 7.52067 12.1957 7.912 12.587C8.304 12.979 8.5 13.45 8.5 14V18C8.5 18.55 8.304 19.021 7.912 19.413C7.52067 19.8043 7.05 20 6.5 20ZM12.5 20C11.95 20 11.4793 19.8043 11.088 19.413C10.696 19.021 10.5 18.55 10.5 18V6C10.5 5.45 10.696 4.97933 11.088 4.588C11.4793 4.196 11.95 4 12.5 4C13.05 4 13.521 4.196 13.913 4.588C14.3043 4.97933 14.5 5.45 14.5 6V18C14.5 18.55 14.3043 19.021 13.913 19.413C13.521 19.8043 13.05 20 12.5 20ZM18.5 20C17.95 20 17.479 19.8043 17.087 19.413C16.6957 19.021 16.5 18.55 16.5 18V11C16.5 10.45 16.6957 9.979 17.087 9.587C17.479 9.19567 17.95 9 18.5 9C19.05 9 19.521 9.19567 19.913 9.587C20.3043 9.979 20.5 10.45 20.5 11V18C20.5 18.55 20.3043 19.021 19.913 19.413C19.521 19.8043 19.05 20 18.5 20Z"
        fill={color}
      />
    </svg>
  );
};

EqualizerDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default EqualizerDs2Icon;
