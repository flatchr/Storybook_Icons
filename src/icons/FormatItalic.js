import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FormatItalicIcon = ({
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
        d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
        fill={color}
      />
    </svg>
  );
};

FormatItalicIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default FormatItalicIcon;
