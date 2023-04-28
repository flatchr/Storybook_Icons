import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const RemoveDs2Icon = ({
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
        d="M6.5 13C6.21667 13 5.979 12.904 5.787 12.712C5.59567 12.5207 5.5 12.2833 5.5 12C5.5 11.7167 5.59567 11.479 5.787 11.287C5.979 11.0957 6.21667 11 6.5 11H18.5C18.7833 11 19.0207 11.0957 19.212 11.287C19.404 11.479 19.5 11.7167 19.5 12C19.5 12.2833 19.404 12.5207 19.212 12.712C19.0207 12.904 18.7833 13 18.5 13H6.5Z"
        fill={color}
      />
    </Svg>
  );
};

RemoveDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default RemoveDs2Icon;
