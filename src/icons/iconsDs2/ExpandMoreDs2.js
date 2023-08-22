import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ExpandMoreDs2Icon = ({
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
        d="M12.4999 14.95C12.3666 14.95 12.2416 14.929 12.1249 14.887C12.0083 14.8456 11.8999 14.775 11.7999 14.675L7.17494 10.05C6.99161 9.86664 6.90427 9.63731 6.91294 9.36198C6.92094 9.08731 7.01661 8.85831 7.19994 8.67498C7.38327 8.49164 7.61661 8.39998 7.89994 8.39998C8.18327 8.39998 8.41661 8.49164 8.59994 8.67498L12.4999 12.575L16.4249 8.64998C16.6083 8.46664 16.8376 8.37898 17.1129 8.38698C17.3876 8.39564 17.6166 8.49164 17.7999 8.67498C17.9833 8.85831 18.0749 9.09164 18.0749 9.37498C18.0749 9.65831 17.9833 9.89164 17.7999 10.075L13.1999 14.675C13.0999 14.775 12.9916 14.8456 12.8749 14.887C12.7583 14.929 12.6333 14.95 12.4999 14.95Z"
        fill={color}
      />
    </svg>
  );
};

ExpandMoreDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ExpandMoreDs2Icon;
