import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const TaskIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M9.10417 12.6042L7.9375 11.4376C7.85417 11.3542 7.76389 11.2917 7.66667 11.2501C7.56945 11.2084 7.46889 11.1876 7.365 11.1876C7.26056 11.1876 7.15639 11.2084 7.0525 11.2501C6.94806 11.2917 6.85417 11.3542 6.77084 11.4376C6.60417 11.6042 6.52084 11.8023 6.52084 12.0317C6.52084 12.2606 6.60417 12.4584 6.77084 12.6251L8.54167 14.4167C8.625 14.5001 8.71528 14.559 8.8125 14.5934C8.90972 14.6284 9.01389 14.6459 9.125 14.6459C9.23611 14.6459 9.34028 14.6284 9.4375 14.5934C9.53472 14.559 9.625 14.5001 9.70834 14.4167L13.2292 10.8959C13.3958 10.7292 13.4792 10.5279 13.4792 10.2917C13.4792 10.0556 13.3958 9.85425 13.2292 9.68758C13.0625 9.52091 12.8611 9.43758 12.625 9.43758C12.3889 9.43758 12.1875 9.52091 12.0208 9.68758L9.10417 12.6042ZM5 18.3334C4.54167 18.3334 4.14945 18.1704 3.82334 17.8442C3.49667 17.5176 3.33334 17.1251 3.33334 16.6667V3.33341C3.33334 2.87508 3.49667 2.48258 3.82334 2.15591C4.14945 1.8298 4.54167 1.66675 5 1.66675H10.9792C11.2014 1.66675 11.4133 1.70841 11.615 1.79175C11.8161 1.87508 11.9931 1.99314 12.1458 2.14591L16.1875 6.18758C16.3403 6.34036 16.4583 6.5173 16.5417 6.71841C16.625 6.92008 16.6667 7.13203 16.6667 7.35425V16.6667C16.6667 17.1251 16.5036 17.5176 16.1775 17.8442C15.8508 18.1704 15.4583 18.3334 15 18.3334H5ZM10.8333 6.66675V3.33341H5V16.6667H15V7.50008H11.6667C11.4306 7.50008 11.2328 7.42008 11.0733 7.26008C10.9133 7.10064 10.8333 6.90286 10.8333 6.66675Z"
              fill={color}
        />
      </g>
    </svg>
  );
};

TaskIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default TaskIcon;
