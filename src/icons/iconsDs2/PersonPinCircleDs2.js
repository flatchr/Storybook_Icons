import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PersonPinCircleDs2Icon = ({
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
        d="M12.5 15C13.4333 15 14.275 14.7707 15.025 14.312C15.775 13.854 16.3667 13.25 16.8 12.5C16.2167 12.0167 15.5583 11.6457 14.825 11.387C14.0917 11.129 13.3167 11 12.5 11C11.6833 11 10.9083 11.129 10.175 11.387C9.44167 11.6457 8.78333 12.0167 8.2 12.5C8.63333 13.25 9.225 13.854 9.975 14.312C10.725 14.7707 11.5667 15 12.5 15ZM12.5 10C13.05 10 13.521 9.804 13.913 9.412C14.3043 9.02067 14.5 8.55 14.5 8C14.5 7.45 14.3043 6.97933 13.913 6.588C13.521 6.196 13.05 6 12.5 6C11.95 6 11.4793 6.196 11.088 6.588C10.696 6.97933 10.5 7.45 10.5 8C10.5 8.55 10.696 9.02067 11.088 9.412C11.4793 9.804 11.95 10 12.5 10ZM12.5 19.35C14.5333 17.4833 16.0417 15.7873 17.025 14.262C18.0083 12.7373 18.5 11.3833 18.5 10.2C18.5 8.38333 17.9207 6.89567 16.762 5.737C15.604 4.579 14.1833 4 12.5 4C10.8167 4 9.39567 4.579 8.237 5.737C7.079 6.89567 6.5 8.38333 6.5 10.2C6.5 11.3833 6.99167 12.7373 7.975 14.262C8.95833 15.7873 10.4667 17.4833 12.5 19.35ZM12.5 21.625C12.3667 21.625 12.2333 21.6 12.1 21.55C11.9667 21.5 11.85 21.4333 11.75 21.35C9.31667 19.2 7.5 17.2043 6.3 15.363C5.1 13.521 4.5 11.8 4.5 10.2C4.5 7.7 5.30433 5.70833 6.913 4.225C8.521 2.74167 10.3833 2 12.5 2C14.6167 2 16.479 2.74167 18.087 4.225C19.6957 5.70833 20.5 7.7 20.5 10.2C20.5 11.8 19.9 13.521 18.7 15.363C17.5 17.2043 15.6833 19.2 13.25 21.35C13.15 21.4333 13.0333 21.5 12.9 21.55C12.7667 21.6 12.6333 21.625 12.5 21.625Z"
        fill={color}
      />
    </svg>
  );
};

PersonPinCircleDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PersonPinCircleDs2Icon;
