import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ArrowForwardIosDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.65002 21.1C7.40002 20.85 7.27502 20.554 7.27502 20.212C7.27502 19.8707 7.40002 19.575 7.65002 19.325L14.975 12L7.62502 4.65C7.39169 4.41667 7.27502 4.125 7.27502 3.775C7.27502 3.425 7.40002 3.125 7.65002 2.875C7.90002 2.625 8.19602 2.5 8.53802 2.5C8.87936 2.5 9.17502 2.625 9.42502 2.875L17.825 11.3C17.925 11.4 17.996 11.5083 18.038 11.625C18.0794 11.7417 18.1 11.8667 18.1 12C18.1 12.1333 18.0794 12.2583 18.038 12.375C17.996 12.4917 17.925 12.6 17.825 12.7L9.40002 21.125C9.16669 21.3583 8.87936 21.475 8.53802 21.475C8.19602 21.475 7.90002 21.35 7.65002 21.1Z"
        fill={color}
      />
    </svg>
  );
};

ArrowForwardIosDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ArrowForwardIosDs2Icon;
