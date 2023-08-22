import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const AttachMoneyDs2Icon = ({
  color = "#2B435E",
  size = 24
}) => {

  return (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.525 21C12.2416 21 12.0041 20.9042 11.8125 20.7125C11.6208 20.5208 11.525 20.2833 11.525 20V18.85C10.775 18.6833 10.1166 18.3917 9.54997 17.975C8.9833 17.5583 8.52497 16.975 8.17497 16.225C8.0583 15.9917 8.05414 15.7458 8.16247 15.4875C8.2708 15.2292 8.46664 15.0417 8.74997 14.925C8.9833 14.825 9.22497 14.8292 9.47497 14.9375C9.72497 15.0458 9.91664 15.225 10.05 15.475C10.3333 15.975 10.6916 16.3542 11.125 16.6125C11.5583 16.8708 12.0916 17 12.725 17C13.4083 17 13.9875 16.8458 14.4625 16.5375C14.9375 16.2292 15.175 15.75 15.175 15.1C15.175 14.5167 14.9916 14.0542 14.625 13.7125C14.2583 13.3708 13.4083 12.9833 12.075 12.55C10.6416 12.1 9.6583 11.5625 9.12497 10.9375C8.59164 10.3125 8.32497 9.55 8.32497 8.65C8.32497 7.56667 8.67497 6.725 9.37497 6.125C10.075 5.525 10.7916 5.18333 11.525 5.1V4C11.525 3.71667 11.6208 3.47917 11.8125 3.2875C12.0041 3.09583 12.2416 3 12.525 3C12.8083 3 13.0458 3.09583 13.2375 3.2875C13.4291 3.47917 13.525 3.71667 13.525 4V5.1C14.1583 5.2 14.7083 5.40417 15.175 5.7125C15.6416 6.02083 16.025 6.4 16.325 6.85C16.475 7.06667 16.5041 7.30833 16.4125 7.575C16.3208 7.84167 16.1333 8.03333 15.85 8.15C15.6166 8.25 15.375 8.25417 15.125 8.1625C14.875 8.07083 14.6416 7.90833 14.425 7.675C14.2083 7.44167 13.9541 7.2625 13.6625 7.1375C13.3708 7.0125 13.0083 6.95 12.575 6.95C11.8416 6.95 11.2833 7.1125 10.9 7.4375C10.5166 7.7625 10.325 8.16667 10.325 8.65C10.325 9.2 10.575 9.63333 11.075 9.95C11.575 10.2667 12.4416 10.6 13.675 10.95C14.825 11.2833 15.6958 11.8125 16.2875 12.5375C16.8791 13.2625 17.175 14.1 17.175 15.05C17.175 16.2333 16.825 17.1333 16.125 17.75C15.425 18.3667 14.5583 18.75 13.525 18.9V20C13.525 20.2833 13.4291 20.5208 13.2375 20.7125C13.0458 20.9042 12.8083 21 12.525 21Z"
            fill={color}
      />
    </svg>
  );
};

AttachMoneyDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default AttachMoneyDs2Icon;
