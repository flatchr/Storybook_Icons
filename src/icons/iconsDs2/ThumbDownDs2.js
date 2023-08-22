import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ThumbDownDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
      <svg
          width={size}
          height={size}
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 16C2.96667 16 2.5 15.8 2.1 15.4C1.7 15 1.5 14.5333 1.5 14V12C1.5 11.8833 1.51667 11.7583 1.55 11.625C1.58333 11.4917 1.61667 11.3667 1.65 11.25L4.65 4.2C4.8 3.86667 5.05 3.58333 5.4 3.35C5.75 3.11667 6.11667 3 6.5 3H17.5V16L11.5 21.95C11.25 22.2 10.9542 22.3458 10.6125 22.3875C10.2708 22.4292 9.94167 22.3667 9.625 22.2C9.30833 22.0333 9.075 21.8 8.925 21.5C8.775 21.2 8.74167 20.8917 8.825 20.575L9.95 16H3.5ZM15.5 15.15V5H6.5L3.5 12V14H12.5L11.15 19.5L15.5 15.15ZM20.5 3C21.05 3 21.5208 3.19583 21.9125 3.5875C22.3042 3.97917 22.5 4.45 22.5 5V14C22.5 14.55 22.3042 15.0208 21.9125 15.4125C21.5208 15.8042 21.05 16 20.5 16H17.5V14H20.5V5H17.5V3H20.5Z"
              fill={color}
        />
      </svg>

  );
};

ThumbDownDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ThumbDownDs2Icon;
