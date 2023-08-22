import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const MailIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (

    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M3.42465 16.6666C2.96631 16.6666 2.57409 16.5035 2.24798 16.1774C1.92131 15.8508 1.75798 15.4583 1.75798 14.9999V4.99992C1.75798 4.54159 1.92131 4.14936 2.24798 3.82325C2.57409 3.49659 2.96631 3.33325 3.42465 3.33325H16.758C17.2163 3.33325 17.6088 3.49659 17.9355 3.82325C18.2616 4.14936 18.4246 4.54159 18.4246 4.99992V14.9999C18.4246 15.4583 18.2616 15.8508 17.9355 16.1774C17.6088 16.5035 17.2163 16.6666 16.758 16.6666H3.42465ZM16.758 6.66659L10.5288 10.5624C10.4594 10.6041 10.3863 10.6352 10.3096 10.6558C10.2335 10.6769 10.1608 10.6874 10.0913 10.6874C10.0219 10.6874 9.94909 10.6769 9.87298 10.6558C9.79631 10.6352 9.72326 10.6041 9.65381 10.5624L3.42465 6.66659V14.9999H16.758V6.66659ZM10.0913 9.16658L16.758 4.99992H3.42465L10.0913 9.16658ZM3.42465 6.87492V5.64575V5.66659V5.65575V6.87492Z"
              fill={color}
        />
      </g>
    </svg>

  );
};

MailIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default MailIcon;
