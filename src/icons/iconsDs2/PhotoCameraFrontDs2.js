import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PhotoCameraFrontDs2Icon = ({
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
        d="M8.5 17H16.5V16.45C16.5 15.7 16.1333 15.104 15.4 14.662C14.6667 14.2207 13.7 14 12.5 14C11.3 14 10.3333 14.2207 9.6 14.662C8.86667 15.104 8.5 15.7 8.5 16.45V17ZM12.5 13C13.05 13 13.521 12.804 13.913 12.412C14.3043 12.0207 14.5 11.55 14.5 11C14.5 10.45 14.3043 9.979 13.913 9.587C13.521 9.19567 13.05 9 12.5 9C11.95 9 11.4793 9.19567 11.088 9.587C10.696 9.979 10.5 10.45 10.5 11C10.5 11.55 10.696 12.0207 11.088 12.412C11.4793 12.804 11.95 13 12.5 13ZM4.5 21C3.95 21 3.47933 20.8043 3.088 20.413C2.696 20.021 2.5 19.55 2.5 19V7C2.5 6.45 2.696 5.97933 3.088 5.588C3.47933 5.196 3.95 5 4.5 5H7.65L8.9 3.65C9.08333 3.43333 9.304 3.27067 9.562 3.162C9.82067 3.054 10.0917 3 10.375 3H14.625C14.9083 3 15.1793 3.054 15.438 3.162C15.696 3.27067 15.9167 3.43333 16.1 3.65L17.35 5H20.5C21.05 5 21.521 5.196 21.913 5.588C22.3043 5.97933 22.5 6.45 22.5 7V19C22.5 19.55 22.3043 20.021 21.913 20.413C21.521 20.8043 21.05 21 20.5 21H4.5ZM20.5 19V7H4.5V19H20.5Z"
        fill={color}
      />
    </Svg>
  );
};

PhotoCameraFrontDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PhotoCameraFrontDs2Icon;
