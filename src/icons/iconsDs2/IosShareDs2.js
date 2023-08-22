import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const IosShareDs2Icon = ({
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
        d="M12.5 16C12.2167 16 11.9793 15.904 11.788 15.712C11.596 15.5207 11.5 15.2833 11.5 15V4.82499L10.6 5.72499C10.4167 5.90832 10.1877 5.99999 9.913 5.99999C9.63767 5.99999 9.4 5.89999 9.2 5.69999C9.01667 5.49999 8.925 5.26232 8.925 4.98699C8.925 4.71232 9.01667 4.48332 9.2 4.29999L11.8 1.69999C11.8833 1.61665 11.9877 1.54999 12.113 1.49999C12.2377 1.44999 12.3667 1.42499 12.5 1.42499C12.6333 1.42499 12.7627 1.44999 12.888 1.49999C13.0127 1.54999 13.1167 1.61665 13.2 1.69999L15.8 4.29999C16 4.49999 16.1 4.74165 16.1 5.02499C16.1 5.30832 16 5.54165 15.8 5.72499C15.6 5.90832 15.3627 5.99999 15.088 5.99999C14.8127 5.99999 14.5833 5.90832 14.4 5.72499L13.5 4.82499V15C13.5 15.2833 13.4043 15.5207 13.213 15.712C13.021 15.904 12.7833 16 12.5 16ZM6.5 23C5.95 23 5.47933 22.8043 5.088 22.413C4.696 22.021 4.5 21.55 4.5 21V9.99999C4.5 9.44999 4.696 8.97899 5.088 8.58699C5.47933 8.19565 5.95 7.99999 6.5 7.99999H8.5C8.78333 7.99999 9.021 8.09565 9.213 8.28699C9.40433 8.47899 9.5 8.71665 9.5 8.99999C9.5 9.28332 9.40433 9.52065 9.213 9.71199C9.021 9.90399 8.78333 9.99999 8.5 9.99999H6.5V21H18.5V9.99999H16.5C16.2167 9.99999 15.9793 9.90399 15.788 9.71199C15.596 9.52065 15.5 9.28332 15.5 8.99999C15.5 8.71665 15.596 8.47899 15.788 8.28699C15.9793 8.09565 16.2167 7.99999 16.5 7.99999H18.5C19.05 7.99999 19.521 8.19565 19.913 8.58699C20.3043 8.97899 20.5 9.44999 20.5 9.99999V21C20.5 21.55 20.3043 22.021 19.913 22.413C19.521 22.8043 19.05 23 18.5 23H6.5Z"
        fill={color}
      />
    </svg>
  );
};

IosShareDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default IosShareDs2Icon;
