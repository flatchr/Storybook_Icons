
import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PreviewDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V4H2V16ZM9 14C7.63333 14 6.4125 13.6292 5.3375 12.8875C4.2625 12.1458 3.48333 11.1833 3 10C3.48333 8.81667 4.2625 7.85417 5.3375 7.1125C6.4125 6.37083 7.63333 6 9 6C10.3667 6 11.5875 6.37083 12.6625 7.1125C13.7375 7.85417 14.5167 8.81667 15 10C14.5167 11.1833 13.7375 12.1458 12.6625 12.8875C11.5875 13.6292 10.3667 14 9 14ZM9 12.5C9.93333 12.5 10.7833 12.2792 11.55 11.8375C12.3167 11.3958 12.9167 10.7833 13.35 10C12.9167 9.21667 12.3167 8.60417 11.55 8.1625C10.7833 7.72083 9.93333 7.5 9 7.5C8.06667 7.5 7.21667 7.72083 6.45 8.1625C5.68333 8.60417 5.08333 9.21667 4.65 10C5.08333 10.7833 5.68333 11.3958 6.45 11.8375C7.21667 12.2792 8.06667 12.5 9 12.5ZM9 11.5C9.41667 11.5 9.77083 11.3542 10.0625 11.0625C10.3542 10.7708 10.5 10.4167 10.5 10C10.5 9.58333 10.3542 9.22917 10.0625 8.9375C9.77083 8.64583 9.41667 8.5 9 8.5C8.58333 8.5 8.22917 8.64583 7.9375 8.9375C7.64583 9.22917 7.5 9.58333 7.5 10C7.5 10.4167 7.64583 10.7708 7.9375 11.0625C8.22917 11.3542 8.58333 11.5 9 11.5Z"
        fill={color}
      />
    </svg>
  );
};

PreviewDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PreviewDs2Icon;
