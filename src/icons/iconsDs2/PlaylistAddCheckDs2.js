import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PlaylistAddCheckDs2Icon = ({
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
        d="M4.5 8C4.21667 8 3.97933 7.90433 3.788 7.713C3.596 7.521 3.5 7.28333 3.5 7C3.5 6.71667 3.596 6.479 3.788 6.287C3.97933 6.09567 4.21667 6 4.5 6H14.5C14.7833 6 15.021 6.09567 15.213 6.287C15.4043 6.479 15.5 6.71667 15.5 7C15.5 7.28333 15.4043 7.521 15.213 7.713C15.021 7.90433 14.7833 8 14.5 8H4.5ZM4.5 12C4.21667 12 3.97933 11.904 3.788 11.712C3.596 11.5207 3.5 11.2833 3.5 11C3.5 10.7167 3.596 10.479 3.788 10.287C3.97933 10.0957 4.21667 10 4.5 10H14.5C14.7833 10 15.021 10.0957 15.213 10.287C15.4043 10.479 15.5 10.7167 15.5 11C15.5 11.2833 15.4043 11.5207 15.213 11.712C15.021 11.904 14.7833 12 14.5 12H4.5ZM4.5 16C4.21667 16 3.97933 15.904 3.788 15.712C3.596 15.5207 3.5 15.2833 3.5 15C3.5 14.7167 3.596 14.479 3.788 14.287C3.97933 14.0957 4.21667 14 4.5 14H10.5C10.7833 14 11.021 14.0957 11.213 14.287C11.4043 14.479 11.5 14.7167 11.5 15C11.5 15.2833 11.4043 15.5207 11.213 15.712C11.021 15.904 10.7833 16 10.5 16H4.5ZM16.15 18.3L14 16.15C13.8167 15.9667 13.725 15.7333 13.725 15.45C13.725 15.1667 13.8167 14.9333 14 14.75C14.1833 14.5667 14.4127 14.475 14.688 14.475C14.9627 14.475 15.2 14.5667 15.4 14.75L16.85 16.15L20.4 12.6C20.5833 12.4167 20.8123 12.325 21.087 12.325C21.3623 12.325 21.6 12.425 21.8 12.625C22 12.825 22.096 13.0667 22.088 13.35C22.0793 13.6333 21.975 13.875 21.775 14.075L17.55 18.3C17.3667 18.4833 17.1333 18.575 16.85 18.575C16.5667 18.575 16.3333 18.4833 16.15 18.3Z"
        fill={color}
      />
    </svg>
  );
};

PlaylistAddCheckDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PlaylistAddCheckDs2Icon;
