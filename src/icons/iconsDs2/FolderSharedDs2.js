import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FolderSharedDs2Icon = ({
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
        d="M15.5 13C16.05 13 16.521 12.804 16.913 12.412C17.3043 12.0207 17.5 11.55 17.5 11C17.5 10.45 17.3043 9.979 16.913 9.587C16.521 9.19567 16.05 9 15.5 9C14.95 9 14.4793 9.19567 14.088 9.587C13.696 9.979 13.5 10.45 13.5 11C13.5 11.55 13.696 12.0207 14.088 12.412C14.4793 12.804 14.95 13 15.5 13ZM11.5 17H19.5V16.45C19.5 15.7 19.1333 15.104 18.4 14.662C17.6667 14.2207 16.7 14 15.5 14C14.3 14 13.3333 14.2207 12.6 14.662C11.8667 15.104 11.5 15.7 11.5 16.45V17ZM4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.696 19.021 2.5 18.55 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.47933 4.196 3.95 4 4.5 4H9.675C9.94167 4 10.196 4.05 10.438 4.15C10.6793 4.25 10.8917 4.39167 11.075 4.575L12.5 6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.3043 6.97933 22.5 7.45 22.5 8V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.521 19.8043 21.05 20 20.5 20H4.5ZM4.5 6V18H20.5V8H11.675L9.675 6H4.5Z" 
        fill={color}
      />
    </Svg>
  );
};

FolderSharedDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FolderSharedDs2Icon;
