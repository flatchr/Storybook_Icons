import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PauseDs2Icon = ({
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
        d="M15.5 19C14.95 19 14.4793 18.8043 14.088 18.413C13.696 18.021 13.5 17.55 13.5 17V7C13.5 6.45 13.696 5.97933 14.088 5.588C14.4793 5.196 14.95 5 15.5 5H17.5C18.05 5 18.521 5.196 18.913 5.588C19.3043 5.97933 19.5 6.45 19.5 7V17C19.5 17.55 19.3043 18.021 18.913 18.413C18.521 18.8043 18.05 19 17.5 19H15.5ZM7.5 19C6.95 19 6.47933 18.8043 6.088 18.413C5.696 18.021 5.5 17.55 5.5 17V7C5.5 6.45 5.696 5.97933 6.088 5.588C6.47933 5.196 6.95 5 7.5 5H9.5C10.05 5 10.521 5.196 10.913 5.588C11.3043 5.97933 11.5 6.45 11.5 7V17C11.5 17.55 11.3043 18.021 10.913 18.413C10.521 18.8043 10.05 19 9.5 19H7.5ZM15.5 17H17.5V7H15.5V17ZM7.5 17H9.5V7H7.5V17Z"
        fill={color}
      />
    </svg>
  );
};

PauseDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PauseDs2Icon;
