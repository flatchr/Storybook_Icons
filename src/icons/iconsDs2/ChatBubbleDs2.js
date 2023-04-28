import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ChatBubbleDs2Icon = ({
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
        d="M2.5 19.575V4C2.5 3.45 2.696 2.979 3.088 2.587C3.47933 2.19567 3.95 2 4.5 2H20.5C21.05 2 21.521 2.19567 21.913 2.587C22.3043 2.979 22.5 3.45 22.5 4V16C22.5 16.55 22.3043 17.021 21.913 17.413C21.521 17.8043 21.05 18 20.5 18H6.5L4.2 20.3C3.88333 20.6167 3.52067 20.6873 3.112 20.512C2.704 20.3373 2.5 20.025 2.5 19.575ZM4.5 17.175L5.675 16H20.5V4H4.5V17.175Z" 
        fill={color}
      />
    </Svg>
  );
};

ChatBubbleDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ChatBubbleDs2Icon;
