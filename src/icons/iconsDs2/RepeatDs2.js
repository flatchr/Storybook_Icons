import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const RepeatDs2Icon = ({
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
        d="M7.5 22L3.5 18L7.5 14L8.9 15.45L7.35 17H17.5V13H19.5V19H7.35L8.9 20.55L7.5 22ZM5.5 11V5H17.65L16.1 3.45L17.5 2L21.5 6L17.5 10L16.1 8.55L17.65 7H7.5V11H5.5Z"
        fill={color}
      />
    </svg>
  );
};

RepeatDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default RepeatDs2Icon;
