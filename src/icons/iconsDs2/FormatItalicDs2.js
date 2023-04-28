import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FormatItalicDs2Icon = ({
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
        d="M7 20C6.58333 20 6.22933 19.854 5.938 19.562C5.646 19.2707 5.5 18.9167 5.5 18.5C5.5 18.0833 5.646 17.7293 5.938 17.438C6.22933 17.146 6.58333 17 7 17H8.875L12.875 7H11C10.5833 7 10.2293 6.854 9.938 6.562C9.646 6.27067 9.5 5.91667 9.5 5.5C9.5 5.08333 9.646 4.72933 9.938 4.438C10.2293 4.146 10.5833 4 11 4H18C18.4167 4 18.7707 4.146 19.062 4.438C19.354 4.72933 19.5 5.08333 19.5 5.5C19.5 5.91667 19.354 6.27067 19.062 6.562C18.7707 6.854 18.4167 7 18 7H16.125L12.125 17H14C14.4167 17 14.7707 17.146 15.062 17.438C15.354 17.7293 15.5 18.0833 15.5 18.5C15.5 18.9167 15.354 19.2707 15.062 19.562C14.7707 19.854 14.4167 20 14 20H7Z" 
        fill={color}
      />
    </Svg>
  );
};

FormatItalicDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FormatItalicDs2Icon;
