import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const RedeemDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.5 17V19H20.5V17H4.5ZM4.5 21C3.95 21 3.47933 20.8043 3.088 20.413C2.696 20.021 2.5 19.55 2.5 19V8C2.5 7.45 2.696 6.97933 3.088 6.588C3.47933 6.196 3.95 6 4.5 6H6.7C6.61667 5.85 6.56233 5.69167 6.537 5.525C6.51233 5.35833 6.5 5.18333 6.5 5C6.5 4.16667 6.79167 3.45833 7.375 2.875C7.95833 2.29167 8.66667 2 9.5 2C10 2 10.4623 2.129 10.887 2.387C11.3123 2.64567 11.6833 2.96667 12 3.35L12.5 4L13 3.35C13.3 2.95 13.6667 2.625 14.1 2.375C14.5333 2.125 15 2 15.5 2C16.3333 2 17.0417 2.29167 17.625 2.875C18.2083 3.45833 18.5 4.16667 18.5 5C18.5 5.18333 18.4873 5.35833 18.462 5.525C18.4373 5.69167 18.3833 5.85 18.3 6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.3043 6.97933 22.5 7.45 22.5 8V19C22.5 19.55 22.3043 20.021 21.913 20.413C21.521 20.8043 21.05 21 20.5 21H4.5ZM4.5 14H20.5V8H15.4L16.925 10.075C17.075 10.275 17.1207 10.504 17.062 10.762C17.004 11.0207 16.8833 11.2417 16.7 11.425C16.4833 11.5917 16.2417 11.65 15.975 11.6C15.7083 11.55 15.4917 11.4167 15.325 11.2L12.5 7.4L9.675 11.225C9.49167 11.4583 9.26267 11.5957 8.988 11.637C8.71267 11.679 8.48333 11.6083 8.3 11.425C8.06667 11.2583 7.92933 11.0417 7.888 10.775C7.846 10.5083 7.90833 10.2667 8.075 10.05L9.55 8H4.5V14ZM9.5 6C9.78333 6 10.021 5.90433 10.213 5.713C10.4043 5.521 10.5 5.28333 10.5 5C10.5 4.71667 10.4043 4.479 10.213 4.287C10.021 4.09567 9.78333 4 9.5 4C9.21667 4 8.97933 4.09567 8.788 4.287C8.596 4.479 8.5 4.71667 8.5 5C8.5 5.28333 8.596 5.521 8.788 5.713C8.97933 5.90433 9.21667 6 9.5 6ZM15.5 6C15.7833 6 16.021 5.90433 16.213 5.713C16.4043 5.521 16.5 5.28333 16.5 5C16.5 4.71667 16.4043 4.479 16.213 4.287C16.021 4.09567 15.7833 4 15.5 4C15.2167 4 14.9793 4.09567 14.788 4.287C14.596 4.479 14.5 4.71667 14.5 5C14.5 5.28333 14.596 5.521 14.788 5.713C14.9793 5.90433 15.2167 6 15.5 6Z"
        fill={color}
      />
    </Svg>
  );
};

RedeemDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default RedeemDs2Icon;