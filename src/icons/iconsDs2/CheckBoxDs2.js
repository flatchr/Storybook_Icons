import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CheckBoxDs2Icon = ({
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
        d="M5.5 21C4.95 21 4.479 20.8043 4.087 20.413C3.69567 20.021 3.5 19.55 3.5 19V5C3.5 4.45 3.69567 3.979 4.087 3.587C4.479 3.19567 4.95 3 5.5 3H19.5C20.05 3 20.521 3.19567 20.913 3.587C21.3043 3.979 21.5 4.45 21.5 5V19C21.5 19.55 21.3043 20.021 20.913 20.413C20.521 20.8043 20.05 21 19.5 21H5.5ZM5.5 19H19.5V5H5.5V19ZM11.1 15.775C11.2333 15.775 11.3583 15.7543 11.475 15.713C11.5917 15.671 11.7 15.6 11.8 15.5L17.475 9.825C17.6583 9.64167 17.75 9.41667 17.75 9.15C17.75 8.88333 17.65 8.65 17.45 8.45C17.2667 8.26667 17.0333 8.175 16.75 8.175C16.4667 8.175 16.2333 8.26667 16.05 8.45L11.1 13.4L8.925 11.225C8.74167 11.0417 8.51667 10.95 8.25 10.95C7.98333 10.95 7.75 11.05 7.55 11.25C7.36667 11.4333 7.275 11.6667 7.275 11.95C7.275 12.2333 7.36667 12.4667 7.55 12.65L10.4 15.5C10.5 15.6 10.6083 15.671 10.725 15.713C10.8417 15.7543 10.9667 15.775 11.1 15.775Z"
        fill={color}
      />
    </Svg>
  );
};

CheckBoxDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default CheckBoxDs2Icon;
