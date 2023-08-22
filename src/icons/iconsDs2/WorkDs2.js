import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const WorkDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 21C3.95 21 3.47933 20.8043 3.088 20.413C2.696 20.021 2.5 19.55 2.5 19V8C2.5 7.45 2.696 6.97933 3.088 6.588C3.47933 6.196 3.95 6 4.5 6H8.5V4C8.5 3.45 8.696 2.979 9.088 2.587C9.47933 2.19567 9.95 2 10.5 2H14.5C15.05 2 15.521 2.19567 15.913 2.587C16.3043 2.979 16.5 3.45 16.5 4V6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.3043 6.97933 22.5 7.45 22.5 8V19C22.5 19.55 22.3043 20.021 21.913 20.413C21.521 20.8043 21.05 21 20.5 21H4.5ZM4.5 19H20.5V8H4.5V19ZM10.5 6H14.5V4H10.5V6Z"
              fill={color}/>
    </svg>
  );
};

WorkDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default WorkDs2Icon;
