import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const LoginDs2Icon = ({
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
        d="M12.5 21V19H19.5V5H12.5V3H19.5C20.05 3 20.521 3.19567 20.913 3.587C21.3043 3.979 21.5 4.45 21.5 5V19C21.5 19.55 21.3043 20.021 20.913 20.413C20.521 20.8043 20.05 21 19.5 21H12.5ZM10.5 17L9.125 15.55L11.675 13H3.5V11H11.675L9.125 8.45L10.5 7L15.5 12L10.5 17Z"
        fill={color}
      />
    </svg>
  );
};

LoginDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default LoginDs2Icon;
