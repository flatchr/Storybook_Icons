import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const AppsIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (
    <svg
      width={width || height || 16}
      height={height || width || 16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        fill={color}
      />
    </svg>
  );
};

AppsIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default AppsIcon;
