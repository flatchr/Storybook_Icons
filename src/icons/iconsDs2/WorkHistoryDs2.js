import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const WorkHistoryDs2Icon = ({
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
        d="M4.5 21C3.95 21 3.47933 20.8043 3.088 20.413C2.696 20.021 2.5 19.55 2.5 19V8C2.5 7.45 2.696 6.97933 3.088 6.588C3.47933 6.196 3.95 6 4.5 6H8.5V4C8.5 3.45 8.696 2.979 9.088 2.587C9.47933 2.19567 9.95 2 10.5 2H14.5C15.05 2 15.521 2.19567 15.913 2.587C16.3043 2.979 16.5 3.45 16.5 4V6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.3043 6.97933 22.5 7.45 22.5 8V12.275C22.2 12.0583 21.8833 11.8707 21.55 11.712C21.2167 11.554 20.8667 11.4167 20.5 11.3V8H4.5V19H11.575C11.625 19.35 11.7 19.6917 11.8 20.025C11.9 20.3583 12.025 20.6833 12.175 21H4.5ZM10.5 6H14.5V4H10.5V6ZM18.5 23C17.1167 23 15.9377 22.5127 14.963 21.538C13.9877 20.5627 13.5 19.3833 13.5 18C13.5 16.6167 13.9877 15.4373 14.963 14.462C15.9377 13.4873 17.1167 13 18.5 13C19.8833 13 21.0627 13.4873 22.038 14.462C23.0127 15.4373 23.5 16.6167 23.5 18C23.5 19.3833 23.0127 20.5627 22.038 21.538C21.0627 22.5127 19.8833 23 18.5 23ZM20.15 20.35L20.85 19.65L19 17.8V15H18V18.2L20.15 20.35Z"
        fill={color}
      />
    </svg>
  );
};

WorkHistoryDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default WorkHistoryDs2Icon;
