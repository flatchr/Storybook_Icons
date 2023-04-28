import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const TaskDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M11.425 15.125L10.025 13.725C9.925 13.625 9.81667 13.55 9.7 13.5C9.58333 13.45 9.46267 13.425 9.338 13.425C9.21267 13.425 9.08767 13.45 8.963 13.5C8.83767 13.55 8.725 13.625 8.625 13.725C8.425 13.925 8.325 14.1627 8.325 14.438C8.325 14.7127 8.425 14.95 8.625 15.15L10.75 17.3C10.85 17.4 10.9583 17.4707 11.075 17.512C11.1917 17.554 11.3167 17.575 11.45 17.575C11.5833 17.575 11.7083 17.554 11.825 17.512C11.9417 17.4707 12.05 17.4 12.15 17.3L16.375 13.075C16.575 12.875 16.675 12.6333 16.675 12.35C16.675 12.0667 16.575 11.825 16.375 11.625C16.175 11.425 15.9333 11.325 15.65 11.325C15.3667 11.325 15.125 11.425 14.925 11.625L11.425 15.125ZM6.5 22C5.95 22 5.47933 21.8043 5.088 21.413C4.696 21.021 4.5 20.55 4.5 20V4C4.5 3.45 4.696 2.979 5.088 2.587C5.47933 2.19567 5.95 2 6.5 2H13.675C13.9417 2 14.196 2.05 14.438 2.15C14.6793 2.24 14.8917 2.39167 15.075 2.575L19.925 7.425C20.1083 7.60833 20.24 7.82067 20.35 8.062C20.45 8.304 20.5 8.55833 20.5 8.825V20C20.5 20.55 20.3043 21.021 19.913 21.413C19.521 21.8043 19.05 22 18.5 22H6.5ZM13.5 8V4H6.5V20H18.5V9H14.5C14.2167 9 13.9793 8.904 13.788 8.712C13.596 8.52067 13.5 8.28333 13.5 8Z"
              fill={color}
        />
    </Svg>

  );
};

TaskDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default TaskDs2Icon;
