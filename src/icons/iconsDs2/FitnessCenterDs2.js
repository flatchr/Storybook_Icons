import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FitnessCenterDs2Icon = ({
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
        d="M13.2 21.2C13.0167 21.0167 12.925 20.7833 12.925 20.5C12.925 20.2167 13.0167 19.9833 13.2 19.8L16.05 16.95L7.55 8.45L4.7 11.3C4.5 11.5 4.26667 11.5957 4 11.587C3.73333 11.579 3.5 11.475 3.3 11.275C3.1 11.075 3 10.8373 3 10.562C3 10.2873 3.1 10.05 3.3 9.85L4 9.15L3.3 8.45C3.1 8.25 3 8.01667 3 7.75C3 7.48333 3.1 7.25 3.3 7.05L4.725 5.625L4 4.9C3.8 4.7 3.70433 4.46233 3.713 4.187C3.721 3.91233 3.825 3.675 4.025 3.475C4.225 3.275 4.46267 3.175 4.738 3.175C5.01267 3.175 5.25 3.275 5.45 3.475L6.15 4.2L7.55 2.8C7.75 2.6 7.98333 2.5 8.25 2.5C8.51667 2.5 8.75 2.6 8.95 2.8L9.675 3.525L10.4 2.8C10.5833 2.61667 10.8167 2.525 11.1 2.525C11.3833 2.525 11.6167 2.61667 11.8 2.8C11.9833 2.98333 12.075 3.21667 12.075 3.5C12.075 3.78333 11.9833 4.01667 11.8 4.2L8.95 7.05L17.45 15.55L20.3 12.7C20.5 12.5 20.7377 12.4 21.013 12.4C21.2877 12.4 21.525 12.5 21.725 12.7C21.925 12.9 22.025 13.1373 22.025 13.412C22.025 13.6873 21.925 13.925 21.725 14.125L21 14.85L21.7 15.55C21.9 15.75 22 15.9833 22 16.25C22 16.5167 21.9 16.75 21.7 16.95L20.275 18.375L21 19.1C21.2 19.3 21.3 19.5333 21.3 19.8C21.3 20.0667 21.2 20.3 21 20.5C20.8 20.7 20.5627 20.8 20.288 20.8C20.0127 20.8 19.775 20.7 19.575 20.5L18.85 19.8L17.45 21.2C17.25 21.4 17.0167 21.5 16.75 21.5C16.4833 21.5 16.25 21.4 16.05 21.2L15.325 20.475L14.6 21.2C14.4167 21.3833 14.1833 21.475 13.9 21.475C13.6167 21.475 13.3833 21.3833 13.2 21.2Z"
        fill={color}
      />
    </Svg>
  );
};

FitnessCenterDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FitnessCenterDs2Icon;