import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const TwitterDs2Icon = ({
  color = "#1DA1F2",
  colorAdditionnal = "#FFFFFF",
  size = 24
}) => {

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" width="24" height="24" rx="12"
            fill={color}
      />
      <path d="M18.3813 9.40625C18.3813 9.5375 18.3813 9.66875 18.3813 9.78125C18.3813 13.6625 15.4188 18.1438 10.0188 18.1438C8.35 18.1438 6.8125 17.6562 5.5 16.8313C5.725 16.85 5.96875 16.8688 6.19375 16.8688C7.5625 16.8688 8.8375 16.4 9.85 15.6125C8.55625 15.5938 7.46875 14.7313 7.1125 13.5688C7.3 13.6063 7.46875 13.625 7.675 13.625C7.9375 13.625 8.2 13.5875 8.44375 13.5125C7.09375 13.25 6.08125 12.0688 6.08125 10.6438C6.08125 10.625 6.08125 10.625 6.08125 10.6063C6.475 10.8313 6.925 10.9625 7.4125 10.9813C6.625 10.4563 6.1 9.55625 6.1 8.525C6.1 7.98125 6.25 7.475 6.49375 7.04375C7.9375 8.825 10.1125 9.9875 12.55 10.1188C12.4937 9.9125 12.475 9.66875 12.475 9.44375C12.475 7.8125 13.7875 6.5 15.4187 6.5C16.2625 6.5 17.0312 6.85625 17.5562 7.41875C18.2312 7.2875 18.85 7.04375 19.4312 6.70625C19.2062 7.4 18.7375 7.9625 18.1375 8.3375C18.7375 8.2625 19.3 8.1125 19.825 7.86875C19.45 8.46875 18.9625 8.99375 18.3813 9.40625Z"
            fill={colorAdditionnal}
      />
    </svg>
  );
};

TwitterDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default TwitterDs2Icon;
