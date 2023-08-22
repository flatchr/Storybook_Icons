import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const AutoPayIcon = ({
  color = theme.colors.textPrimary,
  height = 24,
  width = 24,
}) => {

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 23C10.3833 23 8.66667 22.5707 7.1 21.712C5.53333 20.854 4.25 19.7167 3.25 18.3V20H1.25V15H6.25V17H4.8C5.6 18.2 6.65 19.1667 7.95 19.9C9.25 20.6333 10.6833 21 12.25 21C13.5 21 14.671 20.7627 15.763 20.288C16.8543 19.8127 17.8043 19.1707 18.613 18.362C19.421 17.554 20.0627 16.604 20.538 15.512C21.0127 14.4207 21.25 13.25 21.25 12H23.25C23.25 13.5167 22.9627 14.9417 22.388 16.275C21.8127 17.6083 21.025 18.775 20.025 19.775C19.025 20.775 17.8583 21.5623 16.525 22.137C15.1917 22.7123 13.7667 23 12.25 23ZM7.6 4.325L6.75 2.475C7.6 1.99167 8.46267 1.625 9.338 1.375C10.2127 1.125 11.1833 1 12.25 1C14.1167 1 15.8333 1.429 17.4 2.287C18.9667 3.14567 20.25 4.28333 21.25 5.7V4H23.25V9H18.25V7H19.7C18.9 5.8 17.85 4.83333 16.55 4.1C15.25 3.36667 13.8167 3 12.25 3C11.3667 3 10.546 3.12067 9.788 3.362C9.02933 3.604 8.3 3.925 7.6 4.325ZM4.25 12L3 9.25L0.25 8L3 6.75L4.25 4L5.5 6.75L8.25 8L5.5 9.25L4.25 12ZM8.05 16L11.45 7H13.05L16.45 16H14.9L14.1 13.7H10.45L9.65 16H8.05ZM10.9 12.4H13.6L12.3 8.65H12.2L10.9 12.4Z"
        fill={color}
      />
    </svg>
  );
};

AutoPayIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default AutoPayIcon;
