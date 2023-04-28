import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FormatBoldDs2Icon = ({
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
        d="M9.5 18C8.95 18 8.47933 17.8043 8.088 17.413C7.696 17.021 7.5 16.55 7.5 16V6C7.5 5.45 7.696 4.97933 8.088 4.588C8.47933 4.196 8.95 4 9.5 4H13C14.1333 4 15.125 4.325 15.975 4.975C16.825 5.625 17.25 6.51667 17.25 7.65C17.25 8.45 17.0667 9.08733 16.7 9.562C16.3333 10.0373 15.9 10.4 15.4 10.65V10.85C16.1333 11.1 16.7083 11.4917 17.125 12.025C17.5417 12.5583 17.75 13.25 17.75 14.1C17.75 15.35 17.2957 16.3127 16.387 16.988C15.479 17.6627 14.4 18 13.15 18H9.5ZM10.15 9.7H12.8C13.35 9.7 13.8043 9.54167 14.163 9.225C14.521 8.90833 14.7 8.50833 14.7 8.025C14.7 7.54167 14.521 7.14167 14.163 6.825C13.8043 6.50833 13.35 6.35 12.8 6.35H10.15V9.7ZM10.15 15.6H13C13.65 15.6 14.1627 15.4333 14.538 15.1C14.9127 14.7667 15.1 14.325 15.1 13.775C15.1 13.225 14.9127 12.7833 14.538 12.45C14.1627 12.1167 13.65 11.95 13 11.95H10.15V15.6Z" 
        fill={color}
      />
    </Svg>
  );
};

FormatBoldDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FormatBoldDs2Icon;
