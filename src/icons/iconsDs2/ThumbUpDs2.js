import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ThumbUpDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.5 21V7.99999L13.5 2.04999C13.75 1.79999 14.0457 1.65399 14.387 1.61199C14.729 1.57066 15.0583 1.63332 15.375 1.79999C15.6917 1.96666 15.925 2.19999 16.075 2.49999C16.225 2.79999 16.2583 3.10832 16.175 3.42499L15.05 7.99999H21.5C22.0333 7.99999 22.5 8.19999 22.9 8.59999C23.3 8.99999 23.5 9.46666 23.5 9.99999V12C23.5 12.1167 23.4833 12.2417 23.45 12.375C23.4167 12.5083 23.3833 12.6333 23.35 12.75L20.35 19.8C20.2 20.1333 19.95 20.4167 19.6 20.65C19.24 20.8833 18.8833 21 18.5 21H7.5ZM9.5 8.84999V19H18.5L21.5 12V9.99999H12.5L13.85 4.49999L9.5 8.84999ZM4.5 21C3.95 21 3.47933 20.8043 3.088 20.413C2.696 20.021 2.5 19.55 2.5 19V9.99999C2.5 9.44999 2.696 8.97899 3.088 8.58699C3.47933 8.19566 3.95 7.99999 4.5 7.99999H7.5V9.99999H4.5V19H7.5V21H4.5Z"
            fill={color}
      />
    </Svg>

  );
};

ThumbUpDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ThumbUpDs2Icon;
