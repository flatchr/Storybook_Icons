import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const UpdateDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M13.5 11.6L16 14.1C16.1833 14.2833 16.275 14.5167 16.275 14.8C16.275 15.0833 16.1833 15.3167 16 15.5C15.8167 15.6833 15.5833 15.775 15.3 15.775C15.0167 15.775 14.7833 15.6833 14.6 15.5L11.8 12.7C11.7 12.6 11.625 12.4873 11.575 12.362C11.525 12.2373 11.5 12.1083 11.5 11.975V8C11.5 7.71667 11.596 7.479 11.788 7.287C11.9793 7.09567 12.2167 7 12.5 7C12.7833 7 13.021 7.09567 13.213 7.287C13.4043 7.479 13.5 7.71667 13.5 8V11.6ZM12.5 21C11.24 21 10.0793 20.7627 8.988 20.288C7.896 19.8127 6.946 19.1707 6.138 18.362C5.32933 17.554 4.68733 16.604 4.212 15.512C3.73733 14.4207 3.5 13.24 3.5 12C3.5 10.75 3.73733 9.579 4.212 8.487C4.68733 7.39567 5.32933 6.44567 6.138 5.637C6.946 4.829 7.896 4.18733 8.988 3.712C10.0793 3.23733 11.24 3 12.5 3C13.8667 3 15.1627 3.29167 16.388 3.875C17.6127 4.45833 18.65 5.28333 19.5 6.35V5C19.5 4.71667 19.596 4.479 19.788 4.287C19.9793 4.09567 20.2167 4 20.5 4C20.7833 4 21.0207 4.09567 21.212 4.287C21.404 4.479 21.5 4.71667 21.5 5V9C21.5 9.28333 21.404 9.52067 21.212 9.712C21.0207 9.904 20.7833 10 20.5 10H16.5C16.2167 10 15.9793 9.904 15.788 9.712C15.596 9.52067 15.5 9.28333 15.5 9C15.5 8.71667 15.596 8.479 15.788 8.287C15.9793 8.09567 16.2167 8 16.5 8H18.25C17.5667 7.06667 16.725 6.33333 15.725 5.8C14.725 5.26667 13.65 5 12.5 5C10.55 5 8.896 5.679 7.538 7.037C6.17933 8.39567 5.5 10.05 5.5 12C5.5 13.95 6.17933 15.604 7.538 16.962C8.896 18.3207 10.55 19 12.5 19C14.0333 19 15.421 18.55 16.663 17.65C17.9043 16.75 18.7417 15.5667 19.175 14.1C19.2583 13.8167 19.4127 13.579 19.638 13.387C19.8627 13.1957 20.1167 13.1333 20.4 13.2C20.7 13.2667 20.9207 13.4333 21.062 13.7C21.204 13.9667 21.2333 14.24 21.15 14.55C20.6 16.4667 19.525 18.0207 17.925 19.212C16.325 20.404 14.5167 21 12.5 21Z"
              fill={color}
        />
    </Svg>

  );
};

UpdateDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default UpdateDs2Icon;