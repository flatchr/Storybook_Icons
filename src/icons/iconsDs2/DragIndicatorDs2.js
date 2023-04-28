import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const DragIndicatorDs2Icon = ({
color = "#2B435E",
  size = 24
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 20C8.95 20 8.47917 19.8042 8.0875 19.4125C7.69583 19.0208 7.5 18.55 7.5 18C7.5 17.45 7.69583 16.9792 8.0875 16.5875C8.47917 16.1958 8.95 16 9.5 16C10.05 16 10.5208 16.1958 10.9125 16.5875C11.3042 16.9792 11.5 17.45 11.5 18C11.5 18.55 11.3042 19.0208 10.9125 19.4125C10.5208 19.8042 10.05 20 9.5 20ZM15.5 20C14.95 20 14.4792 19.8042 14.0875 19.4125C13.6958 19.0208 13.5 18.55 13.5 18C13.5 17.45 13.6958 16.9792 14.0875 16.5875C14.4792 16.1958 14.95 16 15.5 16C16.05 16 16.5208 16.1958 16.9125 16.5875C17.3042 16.9792 17.5 17.45 17.5 18C17.5 18.55 17.3042 19.0208 16.9125 19.4125C16.5208 19.8042 16.05 20 15.5 20ZM9.5 14C8.95 14 8.47917 13.8042 8.0875 13.4125C7.69583 13.0208 7.5 12.55 7.5 12C7.5 11.45 7.69583 10.9792 8.0875 10.5875C8.47917 10.1958 8.95 10 9.5 10C10.05 10 10.5208 10.1958 10.9125 10.5875C11.3042 10.9792 11.5 11.45 11.5 12C11.5 12.55 11.3042 13.0208 10.9125 13.4125C10.5208 13.8042 10.05 14 9.5 14ZM15.5 14C14.95 14 14.4792 13.8042 14.0875 13.4125C13.6958 13.0208 13.5 12.55 13.5 12C13.5 11.45 13.6958 10.9792 14.0875 10.5875C14.4792 10.1958 14.95 10 15.5 10C16.05 10 16.5208 10.1958 16.9125 10.5875C17.3042 10.9792 17.5 11.45 17.5 12C17.5 12.55 17.3042 13.0208 16.9125 13.4125C16.5208 13.8042 16.05 14 15.5 14ZM9.5 8C8.95 8 8.47917 7.80417 8.0875 7.4125C7.69583 7.02083 7.5 6.55 7.5 6C7.5 5.45 7.69583 4.97917 8.0875 4.5875C8.47917 4.19583 8.95 4 9.5 4C10.05 4 10.5208 4.19583 10.9125 4.5875C11.3042 4.97917 11.5 5.45 11.5 6C11.5 6.55 11.3042 7.02083 10.9125 7.4125C10.5208 7.80417 10.05 8 9.5 8ZM15.5 8C14.95 8 14.4792 7.80417 14.0875 7.4125C13.6958 7.02083 13.5 6.55 13.5 6C13.5 5.45 13.6958 4.97917 14.0875 4.5875C14.4792 4.19583 14.95 4 15.5 4C16.05 4 16.5208 4.19583 16.9125 4.5875C17.3042 4.97917 17.5 5.45 17.5 6C17.5 6.55 17.3042 7.02083 16.9125 7.4125C16.5208 7.80417 16.05 8 15.5 8Z"
            fill={color}
      />


    </Svg>
  );
};

DragIndicatorDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default DragIndicatorDs2Icon;
