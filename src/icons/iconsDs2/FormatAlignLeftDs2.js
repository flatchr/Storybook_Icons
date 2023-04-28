import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FormatAlignLeftDs2Icon = ({
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
        d="M4.5 17C4.21667 17 3.97933 16.904 3.788 16.712C3.596 16.5207 3.5 16.2833 3.5 16C3.5 15.7167 3.596 15.479 3.788 15.287C3.97933 15.0957 4.21667 15 4.5 15H14.5C14.7833 15 15.021 15.0957 15.213 15.287C15.4043 15.479 15.5 15.7167 15.5 16C15.5 16.2833 15.4043 16.5207 15.213 16.712C15.021 16.904 14.7833 17 14.5 17H4.5ZM4.5 9C4.21667 9 3.97933 8.904 3.788 8.712C3.596 8.52067 3.5 8.28333 3.5 8C3.5 7.71667 3.596 7.479 3.788 7.287C3.97933 7.09567 4.21667 7 4.5 7H14.5C14.7833 7 15.021 7.09567 15.213 7.287C15.4043 7.479 15.5 7.71667 15.5 8C15.5 8.28333 15.4043 8.52067 15.213 8.712C15.021 8.904 14.7833 9 14.5 9H4.5ZM4.5 13C4.21667 13 3.97933 12.904 3.788 12.712C3.596 12.5207 3.5 12.2833 3.5 12C3.5 11.7167 3.596 11.479 3.788 11.287C3.97933 11.0957 4.21667 11 4.5 11H20.5C20.7833 11 21.0207 11.0957 21.212 11.287C21.404 11.479 21.5 11.7167 21.5 12C21.5 12.2833 21.404 12.5207 21.212 12.712C21.0207 12.904 20.7833 13 20.5 13H4.5ZM4.5 21C4.21667 21 3.97933 20.904 3.788 20.712C3.596 20.5207 3.5 20.2833 3.5 20C3.5 19.7167 3.596 19.4793 3.788 19.288C3.97933 19.096 4.21667 19 4.5 19H20.5C20.7833 19 21.0207 19.096 21.212 19.288C21.404 19.4793 21.5 19.7167 21.5 20C21.5 20.2833 21.404 20.5207 21.212 20.712C21.0207 20.904 20.7833 21 20.5 21H4.5ZM4.5 5C4.21667 5 3.97933 4.904 3.788 4.712C3.596 4.52067 3.5 4.28333 3.5 4C3.5 3.71667 3.596 3.479 3.788 3.287C3.97933 3.09567 4.21667 3 4.5 3H20.5C20.7833 3 21.0207 3.09567 21.212 3.287C21.404 3.479 21.5 3.71667 21.5 4C21.5 4.28333 21.404 4.52067 21.212 4.712C21.0207 4.904 20.7833 5 20.5 5H4.5Z" 
        fill={color}
      />
    </Svg>
  );
};

FormatAlignLeftDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FormatAlignLeftDs2Icon;