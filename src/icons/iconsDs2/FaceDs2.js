import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FaceDs2Icon = ({
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
        d="M9.5 14.25C9.15 14.25 8.85433 14.129 8.613 13.887C8.371 13.6457 8.25 13.35 8.25 13C8.25 12.65 8.371 12.3543 8.613 12.113C8.85433 11.871 9.15 11.75 9.5 11.75C9.85 11.75 10.1457 11.871 10.387 12.113C10.629 12.3543 10.75 12.65 10.75 13C10.75 13.35 10.629 13.6457 10.387 13.887C10.1457 14.129 9.85 14.25 9.5 14.25ZM15.5 14.25C15.15 14.25 14.8543 14.129 14.613 13.887C14.371 13.6457 14.25 13.35 14.25 13C14.25 12.65 14.371 12.3543 14.613 12.113C14.8543 11.871 15.15 11.75 15.5 11.75C15.85 11.75 16.1457 11.871 16.387 12.113C16.629 12.3543 16.75 12.65 16.75 13C16.75 13.35 16.629 13.6457 16.387 13.887C16.1457 14.129 15.85 14.25 15.5 14.25ZM12.5 20C14.7333 20 16.625 19.225 18.175 17.675C19.725 16.125 20.5 14.2333 20.5 12C20.5 11.6 20.475 11.2123 20.425 10.837C20.375 10.4623 20.2833 10.1 20.15 9.75C19.8 9.83333 19.45 9.896 19.1 9.938C18.75 9.97933 18.3833 10 18 10C16.4833 10 15.05 9.675 13.7 9.025C12.35 8.375 11.2 7.46667 10.25 6.3C9.71667 7.6 8.95433 8.72933 7.963 9.688C6.971 10.646 5.81667 11.3667 4.5 11.85V12C4.5 14.2333 5.275 16.125 6.825 17.675C8.375 19.225 10.2667 20 12.5 20ZM12.5 22C11.1167 22 9.81667 21.7373 8.6 21.212C7.38333 20.6873 6.325 19.975 5.425 19.075C4.525 18.175 3.81267 17.1167 3.288 15.9C2.76267 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.76267 9.31667 3.288 8.1C3.81267 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.31233 8.6 2.787C9.81667 2.26233 11.1167 2 12.5 2C13.8833 2 15.1833 2.26233 16.4 2.787C17.6167 3.31233 18.675 4.025 19.575 4.925C20.475 5.825 21.1873 6.88333 21.712 8.1C22.2373 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2373 14.6833 21.712 15.9C21.1873 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6873 16.4 21.212C15.1833 21.7373 13.8833 22 12.5 22ZM11.15 4.125C11.85 5.29167 12.8 6.22933 14 6.938C15.2 7.646 16.5333 8 18 8C18.2333 8 18.4583 7.98767 18.675 7.963C18.8917 7.93767 19.1167 7.90833 19.35 7.875C18.65 6.70833 17.7 5.77067 16.5 5.062C15.3 4.354 13.9667 4 12.5 4C12.2667 4 12.0417 4.01233 11.825 4.037C11.6083 4.06233 11.3833 4.09167 11.15 4.125ZM4.925 9.475C5.775 8.99167 6.51667 8.36667 7.15 7.6C7.78333 6.83333 8.25833 5.975 8.575 5.025C7.725 5.50833 6.98333 6.13333 6.35 6.9C5.71667 7.66667 5.24167 8.525 4.925 9.475Z"
        fill={color}
      />
    </Svg>
  );
};

FaceDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FaceDs2Icon;
