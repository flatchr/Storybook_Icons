import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CreditCardDs2Icon = ({
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
        d="M22.5 6V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.521 19.8043 21.05 20 20.5 20H4.5C3.95 20 3.47933 19.8043 3.088 19.413C2.696 19.021 2.5 18.55 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.47933 4.196 3.95 4 4.5 4H20.5C21.05 4 21.521 4.196 21.913 4.588C22.3043 4.97933 22.5 5.45 22.5 6ZM4.5 8H20.5V6H4.5V8ZM4.5 12V18H20.5V12H4.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default CreditCardDs2Icon;
