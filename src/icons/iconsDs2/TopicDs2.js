import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const TopicDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M7.5 12H17.5C17.7833 12 18.0207 11.904 18.212 11.712C18.404 11.5207 18.5 11.2833 18.5 11C18.5 10.7167 18.404 10.479 18.212 10.287C18.0207 10.0957 17.7833 10 17.5 10H7.5C7.21667 10 6.979 10.0957 6.787 10.287C6.59567 10.479 6.5 10.7167 6.5 11C6.5 11.2833 6.59567 11.5207 6.787 11.712C6.979 11.904 7.21667 12 7.5 12ZM7.5 16H13.5C13.7833 16 14.021 15.904 14.213 15.712C14.4043 15.5207 14.5 15.2833 14.5 15C14.5 14.7167 14.4043 14.479 14.213 14.287C14.021 14.0957 13.7833 14 13.5 14H7.5C7.21667 14 6.979 14.0957 6.787 14.287C6.59567 14.479 6.5 14.7167 6.5 15C6.5 15.2833 6.59567 15.5207 6.787 15.712C6.979 15.904 7.21667 16 7.5 16ZM4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.696 19.021 2.5 18.55 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.47933 4.196 3.95 4 4.5 4H9.675C9.94167 4 10.196 4.05 10.438 4.15C10.6793 4.24 10.8917 4.39167 11.075 4.575L12.5 6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.3043 6.97933 22.5 7.45 22.5 8V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.521 19.8043 21.05 20 20.5 20H4.5ZM4.5 6V18H20.5V8H11.675L9.675 6H4.5Z"
              fill={color}
        />
    </Svg>
  );
};

TopicDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default TopicDs2Icon;
