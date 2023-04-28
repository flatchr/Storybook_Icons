import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ChevronRightDs2Icon = ({
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
        d="M9.20005 17.3C9.01672 17.1167 8.92505 16.8833 8.92505 16.6C8.92505 16.3167 9.01672 16.0833 9.20005 15.9L13.1 12L9.20005 8.1C9.01672 7.91667 8.92505 7.68334 8.92505 7.4C8.92505 7.11667 9.01672 6.88334 9.20005 6.7C9.38338 6.51667 9.61671 6.425 9.90005 6.425C10.1834 6.425 10.4167 6.51667 10.6 6.7L15.2 11.3C15.3 11.4 15.371 11.5083 15.413 11.625C15.4544 11.7417 15.475 11.8667 15.475 12C15.475 12.1333 15.4544 12.2583 15.413 12.375C15.371 12.4917 15.3 12.6 15.2 12.7L10.6 17.3C10.4167 17.4833 10.1834 17.575 9.90005 17.575C9.61671 17.575 9.38338 17.4833 9.20005 17.3Z"
        fill={color}
      />
    </Svg>
  );
};

ChevronRightDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ChevronRightDs2Icon;
