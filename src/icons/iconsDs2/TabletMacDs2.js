import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const TabletMacDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 20.5C12.7833 20.5 13.021 20.404 13.213 20.212C13.4043 20.0207 13.5 19.7833 13.5 19.5C13.5 19.2167 13.4043 18.9793 13.213 18.788C13.021 18.596 12.7833 18.5 12.5 18.5C12.2167 18.5 11.9793 18.596 11.788 18.788C11.596 18.9793 11.5 19.2167 11.5 19.5C11.5 19.7833 11.596 20.0207 11.788 20.212C11.9793 20.404 12.2167 20.5 12.5 20.5ZM5.5 23C4.95 23 4.479 22.8043 4.087 22.413C3.69567 22.021 3.5 21.55 3.5 21V3C3.5 2.45 3.69567 1.979 4.087 1.587C4.479 1.19567 4.95 1 5.5 1H19.5C20.05 1 20.521 1.19567 20.913 1.587C21.3043 1.979 21.5 2.45 21.5 3V21C21.5 21.55 21.3043 22.021 20.913 22.413C20.521 22.8043 20.05 23 19.5 23H5.5ZM5.5 18V21H19.5V18H5.5ZM5.5 16H19.5V6H5.5V16ZM5.5 4H19.5V3H5.5V4Z"
              fill={color}
        />
    </svg>

  );
};

TabletMacDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default TabletMacDs2Icon;
