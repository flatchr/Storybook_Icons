import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const MailDs2Icon = ({
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
        d="M4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.696 19.021 2.5 18.55 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.47933 4.196 3.95 4 4.5 4H20.5C21.05 4 21.521 4.196 21.913 4.588C22.3043 4.97933 22.5 5.45 22.5 6V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.521 19.8043 21.05 20 20.5 20H4.5ZM20.5 8L13.025 12.675C12.9417 12.725 12.854 12.7623 12.762 12.787C12.6707 12.8123 12.5833 12.825 12.5 12.825C12.4167 12.825 12.3293 12.8123 12.238 12.787C12.146 12.7623 12.0583 12.725 11.975 12.675L4.5 8V18H20.5V8ZM12.5 11L20.5 6H4.5L12.5 11ZM4.5 8.25V6.775V6.8V6.787V8.25Z"
        fill={color}
      />
    </svg>
  );
};

MailDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default MailDs2Icon;
