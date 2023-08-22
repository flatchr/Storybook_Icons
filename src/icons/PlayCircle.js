import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PlayCircleIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (
    <svg
      width={width || height || 16}
      height={height || width || 16}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41.6 301.6V162.4L339.2 256l-124.8 93.6z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default PlayCircleIcon;
