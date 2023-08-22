import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PhotoCameraFrontIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M8 17H16V16.45C16 15.7 15.6333 15.104 14.9 14.662C14.1667 14.2207 13.2 14 12 14C10.8 14 9.83333 14.2207 9.1 14.662C8.36667 15.104 8 15.7 8 16.45V17ZM12 13C12.55 13 13.021 12.804 13.413 12.412C13.8043 12.0207 14 11.55 14 11C14 10.45 13.8043 9.979 13.413 9.587C13.021 9.19567 12.55 9 12 9C11.45 9 10.9793 9.19567 10.588 9.587C10.196 9.979 10 10.45 10 11C10 11.55 10.196 12.0207 10.588 12.412C10.9793 12.804 11.45 13 12 13ZM4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.196 20.021 2 19.55 2 19V7C2 6.45 2.196 5.97933 2.588 5.588C2.97933 5.196 3.45 5 4 5H7.15L8.4 3.65C8.58333 3.43333 8.804 3.27067 9.062 3.162C9.32067 3.054 9.59167 3 9.875 3H14.125C14.4083 3 14.6793 3.054 14.938 3.162C15.196 3.27067 15.4167 3.43333 15.6 3.65L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.8043 5.97933 22 6.45 22 7V19C22 19.55 21.8043 20.021 21.413 20.413C21.021 20.8043 20.55 21 20 21H4ZM20 19V7H4V19H20Z"
              fill={color}
        />
      </g>
    </svg>
  );
};

PhotoCameraFrontIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default PhotoCameraFrontIcon;
