import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ApartmentDs2Icon = ({
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
        d="M5.5 21C4.95 21 4.479 20.8043 4.087 20.413C3.69567 20.021 3.5 19.55 3.5 19V9C3.5 8.45 3.69567 7.979 4.087 7.587C4.479 7.19567 4.95 7 5.5 7H7.5V5C7.5 4.45 7.696 3.979 8.088 3.587C8.47933 3.19567 8.95 3 9.5 3H15.5C16.05 3 16.521 3.19567 16.913 3.587C17.3043 3.979 17.5 4.45 17.5 5V11H19.5C20.05 11 20.521 11.1957 20.913 11.587C21.3043 11.979 21.5 12.45 21.5 13V19C21.5 19.55 21.3043 20.021 20.913 20.413C20.521 20.8043 20.05 21 19.5 21H13.5V17H11.5V21H5.5ZM5.5 19H7.5V17H5.5V19ZM5.5 15H7.5V13H5.5V15ZM5.5 11H7.5V9H5.5V11ZM9.5 15H11.5V13H9.5V15ZM9.5 11H11.5V9H9.5V11ZM9.5 7H11.5V5H9.5V7ZM13.5 15H15.5V13H13.5V15ZM13.5 11H15.5V9H13.5V11ZM13.5 7H15.5V5H13.5V7ZM17.5 19H19.5V17H17.5V19ZM17.5 15H19.5V13H17.5V15Z"
        fill={color}
      />
    </svg>
  );
};

ApartmentDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ApartmentDs2Icon;
