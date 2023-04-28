import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FormatIndentIncreaseDs2Icon = ({
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
        d="M4.5 21C4.21667 21 3.97933 20.904 3.788 20.712C3.596 20.5207 3.5 20.2833 3.5 20C3.5 19.7167 3.596 19.4793 3.788 19.288C3.97933 19.096 4.21667 19 4.5 19H20.5C20.7833 19 21.0207 19.096 21.212 19.288C21.404 19.4793 21.5 19.7167 21.5 20C21.5 20.2833 21.404 20.5207 21.212 20.712C21.0207 20.904 20.7833 21 20.5 21H4.5ZM3.5 14.8V9.2C3.5 8.96667 3.6 8.80833 3.8 8.725C4 8.64167 4.18333 8.68333 4.35 8.85L7.15 11.65C7.25 11.75 7.3 11.8667 7.3 12C7.3 12.1333 7.25 12.25 7.15 12.35L4.35 15.15C4.18333 15.3167 4 15.3583 3.8 15.275C3.6 15.1917 3.5 15.0333 3.5 14.8ZM12.5 17C12.2167 17 11.9793 16.904 11.788 16.712C11.596 16.5207 11.5 16.2833 11.5 16C11.5 15.7167 11.596 15.479 11.788 15.287C11.9793 15.0957 12.2167 15 12.5 15H20.5C20.7833 15 21.0207 15.0957 21.212 15.287C21.404 15.479 21.5 15.7167 21.5 16C21.5 16.2833 21.404 16.5207 21.212 16.712C21.0207 16.904 20.7833 17 20.5 17H12.5ZM4.5 5C4.21667 5 3.97933 4.904 3.788 4.712C3.596 4.52067 3.5 4.28333 3.5 4C3.5 3.71667 3.596 3.479 3.788 3.287C3.97933 3.09567 4.21667 3 4.5 3H20.5C20.7833 3 21.0207 3.09567 21.212 3.287C21.404 3.479 21.5 3.71667 21.5 4C21.5 4.28333 21.404 4.52067 21.212 4.712C21.0207 4.904 20.7833 5 20.5 5H4.5ZM12.5 9C12.2167 9 11.9793 8.904 11.788 8.712C11.596 8.52067 11.5 8.28333 11.5 8C11.5 7.71667 11.596 7.479 11.788 7.287C11.9793 7.09567 12.2167 7 12.5 7H20.5C20.7833 7 21.0207 7.09567 21.212 7.287C21.404 7.479 21.5 7.71667 21.5 8C21.5 8.28333 21.404 8.52067 21.212 8.712C21.0207 8.904 20.7833 9 20.5 9H12.5ZM12.5 13C12.2167 13 11.9793 12.904 11.788 12.712C11.596 12.5207 11.5 12.2833 11.5 12C11.5 11.7167 11.596 11.479 11.788 11.287C11.9793 11.0957 12.2167 11 12.5 11H20.5C20.7833 11 21.0207 11.0957 21.212 11.287C21.404 11.479 21.5 11.7167 21.5 12C21.5 12.2833 21.404 12.5207 21.212 12.712C21.0207 12.904 20.7833 13 20.5 13H12.5Z" 
        fill={color}
      />
    </Svg>
  );
};

FormatIndentIncreaseDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FormatIndentIncreaseDs2Icon;