import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CallSplitDs2Icon = ({
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
        d="M15.35 10.6L13.9 9.15L17.1 6H15.5C15.2167 6 14.9793 5.90433 14.788 5.713C14.596 5.521 14.5 5.28333 14.5 5C14.5 4.71667 14.596 4.479 14.788 4.287C14.9793 4.09567 15.2167 4 15.5 4H19.5C19.7833 4 20.0207 4.09567 20.212 4.287C20.404 4.479 20.5 4.71667 20.5 5V9C20.5 9.28333 20.404 9.52067 20.212 9.712C20.0207 9.904 19.7833 10 19.5 10C19.2167 10 18.9793 9.904 18.788 9.712C18.596 9.52067 18.5 9.28333 18.5 9V7.4L15.35 10.6ZM12.5 20C12.2167 20 11.9793 19.904 11.788 19.712C11.596 19.5207 11.5 19.2833 11.5 19V12.4L6.5 7.4V9C6.5 9.28333 6.40433 9.52067 6.213 9.712C6.021 9.904 5.78333 10 5.5 10C5.21667 10 4.979 9.904 4.787 9.712C4.59567 9.52067 4.5 9.28333 4.5 9V5C4.5 4.71667 4.59567 4.479 4.787 4.287C4.979 4.09567 5.21667 4 5.5 4H9.5C9.78333 4 10.021 4.09567 10.213 4.287C10.4043 4.479 10.5 4.71667 10.5 5C10.5 5.28333 10.4043 5.521 10.213 5.713C10.021 5.90433 9.78333 6 9.5 6H7.9L13.5 11.6V19C13.5 19.2833 13.4043 19.5207 13.213 19.712C13.021 19.904 12.7833 20 12.5 20Z"
        fill={color}
      />
    </Svg>
  );
};

CallSplitDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default CallSplitDs2Icon;
