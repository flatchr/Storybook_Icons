import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const BookmarkDs2Icon = ({
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
        d="M7.5 17.95L12.5 15.8L17.5 17.95V5H7.5V17.95ZM6.9 20.4C6.56667 20.5333 6.25 20.504 5.95 20.312C5.65 20.1207 5.5 19.8417 5.5 19.475V5C5.5 4.45 5.696 3.979 6.088 3.587C6.47933 3.19567 6.95 3 7.5 3H17.5C18.05 3 18.521 3.19567 18.913 3.587C19.3043 3.979 19.5 4.45 19.5 5V19.475C19.5 19.8417 19.35 20.1207 19.05 20.312C18.75 20.504 18.4333 20.5333 18.1 20.4L12.5 18L6.9 20.4Z"
        fill={color}
      />
    </Svg>
  );
};

BookmarkDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default BookmarkDs2Icon;
