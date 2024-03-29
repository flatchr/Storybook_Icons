import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SellIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={width || 24}
         height={height || 24}
         viewBox="0 0 24 24"
         fill="none"
    >
      <g>
        <path
          d="M14.25 21.4C13.8667 21.7833 13.3917 21.975 12.825 21.975C12.2583 21.975 11.7833 21.7833 11.4 21.4L2.6 12.6C2.41667 12.4167 2.271 12.2 2.163 11.95C2.05433 11.7 2 11.4333 2 11.15V4C2 3.45 2.196 2.979 2.588 2.587C2.97933 2.19567 3.45 2 4 2H11.15C11.4333 2 11.7 2.054 11.95 2.162C12.2 2.27067 12.4167 2.41667 12.6 2.6L21.4 11.425C21.7833 11.8083 21.975 12.279 21.975 12.837C21.975 13.3957 21.7833 13.8667 21.4 14.25L14.25 21.4ZM12.825 20L19.975 12.85L11.15 4H4V11.15L12.825 20ZM6.5 8C6.91667 8 7.27067 7.854 7.562 7.562C7.854 7.27067 8 6.91667 8 6.5C8 6.08333 7.854 5.72933 7.562 5.438C7.27067 5.146 6.91667 5 6.5 5C6.08333 5 5.72933 5.146 5.438 5.438C5.146 5.72933 5 6.08333 5 6.5C5 6.91667 5.146 7.27067 5.438 7.562C5.72933 7.854 6.08333 8 6.5 8Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

SellIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default SellIcon;
