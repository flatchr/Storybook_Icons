import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FilterAltDs2Icon = ({
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
        d="M11.5 20C11.2167 20 10.9794 19.904 10.788 19.712C10.596 19.5207 10.5 19.2833 10.5 19V13L4.70003 5.6C4.45003 5.26667 4.4127 4.91667 4.58803 4.55C4.7627 4.18333 5.0667 4 5.50003 4H19.5C19.9334 4 20.2377 4.18333 20.413 4.55C20.5877 4.91667 20.55 5.26667 20.3 5.6L14.5 13V19C14.5 19.2833 14.4044 19.5207 14.213 19.712C14.021 19.904 13.7834 20 13.5 20H11.5ZM12.5 12.3L17.45 6H7.55003L12.5 12.3Z"
        fill={color}
      />
    </svg>
  );
};

FilterAltDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FilterAltDs2Icon;
