import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const StarDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M9.35007 17.825L12.5001 15.925L15.6501 17.85L14.8251 14.25L17.6001 11.85L13.9501 11.525L12.5001 8.12501L11.0501 11.5L7.40007 11.825L10.1751 14.25L9.35007 17.825ZM12.5001 18.275L8.35007 20.775C8.16674 20.8917 7.97507 20.9417 7.77507 20.925C7.57507 20.9083 7.40007 20.8417 7.25007 20.725C7.10007 20.6083 6.9834 20.4627 6.90007 20.288C6.81674 20.1127 6.80007 19.9167 6.85007 19.7L7.95007 14.975L4.27507 11.8C4.1084 11.65 4.0044 11.479 3.96307 11.287C3.92107 11.0957 3.9334 10.9083 4.00007 10.725C4.06674 10.5417 4.16674 10.3917 4.30007 10.275C4.4334 10.1583 4.61674 10.0833 4.85007 10.05L9.70007 9.62501L11.5751 5.17501C11.6584 4.97501 11.7877 4.82501 11.9631 4.72501C12.1377 4.62501 12.3167 4.57501 12.5001 4.57501C12.6834 4.57501 12.8627 4.62501 13.0381 4.72501C13.2127 4.82501 13.3417 4.97501 13.4251 5.17501L15.3001 9.62501L20.1501 10.05C20.3834 10.0833 20.5667 10.1583 20.7001 10.275C20.8334 10.3917 20.9334 10.5417 21.0001 10.725C21.0667 10.9083 21.0794 11.0957 21.0381 11.287C20.9961 11.479 20.8917 11.65 20.7251 11.8L17.0501 14.975L18.1501 19.7C18.2001 19.9167 18.1834 20.1127 18.1001 20.288C18.0167 20.4627 17.9001 20.6083 17.7501 20.725C17.6001 20.8417 17.4251 20.9083 17.2251 20.925C17.0251 20.9417 16.8334 20.8917 16.6501 20.775L12.5001 18.275Z"
              fill={color}
        />
    </Svg>

  );
};

StarDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default StarDs2Icon;
