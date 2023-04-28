import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SellDs2Icon = ({
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
        d="M14.75 21.4C14.3667 21.7833 13.8917 21.975 13.325 21.975C12.7583 21.975 12.2833 21.7833 11.9 21.4L3.1 12.6C2.91667 12.4167 2.771 12.2 2.663 11.95C2.55433 11.7 2.5 11.4333 2.5 11.15V4C2.5 3.45 2.696 2.979 3.088 2.587C3.47933 2.19567 3.95 2 4.5 2H11.65C11.9333 2 12.2 2.054 12.45 2.162C12.7 2.27067 12.9167 2.41667 13.1 2.6L21.9 11.425C22.2833 11.8083 22.475 12.279 22.475 12.837C22.475 13.3957 22.2833 13.8667 21.9 14.25L14.75 21.4ZM13.325 20L20.475 12.85L11.65 4H4.5V11.15L13.325 20ZM7 8C7.41667 8 7.77067 7.854 8.062 7.562C8.354 7.27067 8.5 6.91667 8.5 6.5C8.5 6.08333 8.354 5.72933 8.062 5.438C7.77067 5.146 7.41667 5 7 5C6.58333 5 6.22933 5.146 5.938 5.438C5.646 5.72933 5.5 6.08333 5.5 6.5C5.5 6.91667 5.646 7.27067 5.938 7.562C6.22933 7.854 6.58333 8 7 8Z"
        fill={color}
      />
    </Svg>
  );
};

SellDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default SellDs2Icon;
