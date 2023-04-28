import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const StarHalfDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12.5 8.12495V15.925L15.65 17.85L14.825 14.25L17.6 11.85L13.95 11.525L12.5 8.12495ZM12.5 18.275L8.35001 20.775C8.16668 20.8916 7.97501 20.9416 7.77501 20.9249C7.57501 20.9083 7.40001 20.8416 7.25001 20.725C7.10001 20.6083 6.98334 20.4626 6.90001 20.288C6.81668 20.1126 6.80001 19.9166 6.85001 19.7L7.95001 14.975L4.27501 11.8C4.10834 11.65 4.00434 11.479 3.96301 11.287C3.92101 11.0956 3.93334 10.9083 4.00001 10.725C4.06668 10.5416 4.16668 10.3916 4.30001 10.275C4.43334 10.1583 4.61668 10.0833 4.85001 10.05L9.70001 9.62495L11.575 5.17495C11.6583 4.97495 11.7877 4.82495 11.963 4.72495C12.1377 4.62495 12.3167 4.57495 12.5 4.57495C12.6833 4.57495 12.8627 4.62495 13.038 4.72495C13.2127 4.82495 13.3417 4.97495 13.425 5.17495L15.3 9.62495L20.15 10.05C20.3833 10.0833 20.5667 10.1583 20.7 10.275C20.8333 10.3916 20.9333 10.5416 21 10.725C21.0667 10.9083 21.0793 11.0956 21.038 11.287C20.996 11.479 20.8917 11.65 20.725 11.8L17.05 14.975L18.15 19.7C18.2 19.9166 18.1833 20.1126 18.1 20.288C18.0167 20.4626 17.9 20.6083 17.75 20.725C17.6 20.8416 17.425 20.9083 17.225 20.9249C17.025 20.9416 16.8333 20.8916 16.65 20.775L12.5 18.275Z"
              fill={color}
        />
    </Svg>

  );
};

StarHalfDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default StarHalfDs2Icon;
