import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const MoreVertDs2Icon = ({
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
        d="M12.5 20C11.95 20 11.4793 19.8043 11.088 19.413C10.696 19.021 10.5 18.55 10.5 18C10.5 17.45 10.696 16.979 11.088 16.587C11.4793 16.1957 11.95 16 12.5 16C13.05 16 13.521 16.1957 13.913 16.587C14.3043 16.979 14.5 17.45 14.5 18C14.5 18.55 14.3043 19.021 13.913 19.413C13.521 19.8043 13.05 20 12.5 20ZM12.5 14C11.95 14 11.4793 13.804 11.088 13.412C10.696 13.0207 10.5 12.55 10.5 12C10.5 11.45 10.696 10.979 11.088 10.587C11.4793 10.1957 11.95 10 12.5 10C13.05 10 13.521 10.1957 13.913 10.587C14.3043 10.979 14.5 11.45 14.5 12C14.5 12.55 14.3043 13.0207 13.913 13.412C13.521 13.804 13.05 14 12.5 14ZM12.5 8C11.95 8 11.4793 7.804 11.088 7.412C10.696 7.02067 10.5 6.55 10.5 6C10.5 5.45 10.696 4.97933 11.088 4.588C11.4793 4.196 11.95 4 12.5 4C13.05 4 13.521 4.196 13.913 4.588C14.3043 4.97933 14.5 5.45 14.5 6C14.5 6.55 14.3043 7.02067 13.913 7.412C13.521 7.804 13.05 8 12.5 8Z" 
        fill={color}
      />
    </Svg>
  );
};

MoreVertDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default MoreVertDs2Icon;
