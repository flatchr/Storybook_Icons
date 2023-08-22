import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const LaptopMacDs2Icon = ({
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
        d="M2.5 20C1.95 20 1.47933 19.8043 1.088 19.413C0.696 19.021 0.5 18.55 0.5 18H4.5C3.95 18 3.47933 17.8043 3.088 17.413C2.696 17.021 2.5 16.55 2.5 16V5C2.5 4.45 2.696 3.979 3.088 3.587C3.47933 3.19567 3.95 3 4.5 3H20.5C21.05 3 21.521 3.19567 21.913 3.587C22.3043 3.979 22.5 4.45 22.5 5V16C22.5 16.55 22.3043 17.021 21.913 17.413C21.521 17.8043 21.05 18 20.5 18H24.5C24.5 18.55 24.3043 19.021 23.913 19.413C23.521 19.8043 23.05 20 22.5 20H2.5ZM12.5 19C12.7833 19 13.021 18.904 13.213 18.712C13.4043 18.5207 13.5 18.2833 13.5 18C13.5 17.7167 13.4043 17.4793 13.213 17.288C13.021 17.096 12.7833 17 12.5 17C12.2167 17 11.9793 17.096 11.788 17.288C11.596 17.4793 11.5 17.7167 11.5 18C11.5 18.2833 11.596 18.5207 11.788 18.712C11.9793 18.904 12.2167 19 12.5 19ZM4.5 16H20.5V5H4.5V16Z"
        fill={color}
      />
    </svg>
  );
};

LaptopMacDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default LaptopMacDs2Icon;
