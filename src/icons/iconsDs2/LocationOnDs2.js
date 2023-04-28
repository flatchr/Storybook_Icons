import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const LocationOnDs2Icon = ({
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
        d="M12.5 12C13.05 12 13.521 11.804 13.913 11.412C14.3043 11.0207 14.5 10.55 14.5 10C14.5 9.45 14.3043 8.979 13.913 8.587C13.521 8.19567 13.05 8 12.5 8C11.95 8 11.4793 8.19567 11.088 8.587C10.696 8.979 10.5 9.45 10.5 10C10.5 10.55 10.696 11.0207 11.088 11.412C11.4793 11.804 11.95 12 12.5 12ZM12.5 19.35C14.5333 17.4833 16.0417 15.7873 17.025 14.262C18.0083 12.7373 18.5 11.3833 18.5 10.2C18.5 8.38333 17.9207 6.89567 16.762 5.737C15.604 4.579 14.1833 4 12.5 4C10.8167 4 9.39567 4.579 8.237 5.737C7.079 6.89567 6.5 8.38333 6.5 10.2C6.5 11.3833 6.99167 12.7373 7.975 14.262C8.95833 15.7873 10.4667 17.4833 12.5 19.35ZM12.5 22C9.81667 19.7167 7.81267 17.5957 6.488 15.637C5.16267 13.679 4.5 11.8667 4.5 10.2C4.5 7.7 5.30433 5.70833 6.913 4.225C8.521 2.74167 10.3833 2 12.5 2C14.6167 2 16.479 2.74167 18.087 4.225C19.6957 5.70833 20.5 7.7 20.5 10.2C20.5 11.8667 19.8377 13.679 18.513 15.637C17.1877 17.5957 15.1833 19.7167 12.5 22Z"
        fill={color}
      />
    </Svg>
  );
};

LocationOnDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default LocationOnDs2Icon;
