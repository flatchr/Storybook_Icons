import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ColorizeDs2Icon = ({
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
        d="M3.5 20.9999V16.2499L12.45 7.2999L11 5.8999L12.45 4.4999L14.35 6.3999L17.45 3.2999C17.6333 3.11657 17.8667 3.0249 18.15 3.0249C18.4333 3.0249 18.6667 3.11657 18.85 3.2999L21.2 5.6499C21.3833 5.83324 21.475 6.06657 21.475 6.3499C21.475 6.63324 21.3833 6.86657 21.2 7.0499L18.125 10.1249L20.025 12.0749L18.6 13.4999L17.2 12.0499L8.25 20.9999H3.5ZM5.5 18.9999H7.45L15.75 10.6499L13.85 8.7499L5.5 17.0499V18.9999ZM16.675 8.7499L19.075 6.3499L18.15 5.4249L15.75 7.8249L16.675 8.7499Z"
        fill={color}
      />
    </svg>
  );
};

ColorizeDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ColorizeDs2Icon;
