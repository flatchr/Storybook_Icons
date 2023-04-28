import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const MenuDs2Icon = ({
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
        d="M4.5 18C4.21667 18 3.97933 17.904 3.788 17.712C3.596 17.5207 3.5 17.2833 3.5 17C3.5 16.7167 3.596 16.4793 3.788 16.288C3.97933 16.096 4.21667 16 4.5 16H20.5C20.7833 16 21.0207 16.096 21.212 16.288C21.404 16.4793 21.5 16.7167 21.5 17C21.5 17.2833 21.404 17.5207 21.212 17.712C21.0207 17.904 20.7833 18 20.5 18H4.5ZM4.5 13C4.21667 13 3.97933 12.904 3.788 12.712C3.596 12.5207 3.5 12.2833 3.5 12C3.5 11.7167 3.596 11.479 3.788 11.287C3.97933 11.0957 4.21667 11 4.5 11H20.5C20.7833 11 21.0207 11.0957 21.212 11.287C21.404 11.479 21.5 11.7167 21.5 12C21.5 12.2833 21.404 12.5207 21.212 12.712C21.0207 12.904 20.7833 13 20.5 13H4.5ZM4.5 8C4.21667 8 3.97933 7.90433 3.788 7.713C3.596 7.521 3.5 7.28333 3.5 7C3.5 6.71667 3.596 6.479 3.788 6.287C3.97933 6.09567 4.21667 6 4.5 6H20.5C20.7833 6 21.0207 6.09567 21.212 6.287C21.404 6.479 21.5 6.71667 21.5 7C21.5 7.28333 21.404 7.521 21.212 7.713C21.0207 7.90433 20.7833 8 20.5 8H4.5Z"
        fill={color}
      />
    </Svg>
  );
};

MenuDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default MenuDs2Icon;