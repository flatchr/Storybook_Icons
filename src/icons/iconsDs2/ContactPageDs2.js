import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ContactPageDs2Icon = ({
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
        d="M12.5 14C13.05 14 13.521 13.804 13.913 13.412C14.3043 13.0207 14.5 12.55 14.5 12C14.5 11.45 14.3043 10.979 13.913 10.587C13.521 10.1957 13.05 10 12.5 10C11.95 10 11.4793 10.1957 11.088 10.587C10.696 10.979 10.5 11.45 10.5 12C10.5 12.55 10.696 13.0207 11.088 13.412C11.4793 13.804 11.95 14 12.5 14ZM8.5 18H16.5V17.425C16.5 17.025 16.3917 16.6583 16.175 16.325C15.9583 15.9917 15.6583 15.7417 15.275 15.575C14.8417 15.3917 14.396 15.25 13.938 15.15C13.4793 15.05 13 15 12.5 15C12 15 11.5207 15.05 11.062 15.15C10.604 15.25 10.1583 15.3917 9.725 15.575C9.34167 15.7417 9.04167 15.9917 8.825 16.325C8.60833 16.6583 8.5 17.025 8.5 17.425V18ZM18.5 22H6.5C5.95 22 5.47933 21.8043 5.088 21.413C4.696 21.021 4.5 20.55 4.5 20V4C4.5 3.45 4.696 2.979 5.088 2.587C5.47933 2.19567 5.95 2 6.5 2H13.675C13.9417 2 14.196 2.05 14.438 2.15C14.6793 2.25 14.8917 2.39167 15.075 2.575L19.925 7.425C20.1083 7.60833 20.25 7.82067 20.35 8.062C20.45 8.304 20.5 8.55833 20.5 8.825V20C20.5 20.55 20.3043 21.021 19.913 21.413C19.521 21.8043 19.05 22 18.5 22ZM18.5 20V8.85L13.65 4H6.5V20H18.5Z"
        fill={color}
      />
    </svg>
  );
};

ContactPageDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ContactPageDs2Icon;
