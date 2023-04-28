import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const AutopayDs2Icon = ({
  color = "#2B435E",
  size = 24
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12.5 23C10.6333 23 8.91667 22.5707 7.35 21.712C5.78333 20.854 4.5 19.7167 3.5 18.3V20H1.5V15H6.5V17H5.05C5.85 18.2 6.9 19.1667 8.2 19.9C9.5 20.6333 10.9333 21 12.5 21C13.75 21 14.921 20.7627 16.013 20.288C17.1043 19.8127 18.0543 19.1707 18.863 18.362C19.671 17.554 20.3127 16.604 20.788 15.512C21.2627 14.4207 21.5 13.25 21.5 12H23.5C23.5 13.5167 23.2127 14.9417 22.638 16.275C22.0627 17.6083 21.275 18.775 20.275 19.775C19.275 20.775 18.1083 21.5623 16.775 22.137C15.4417 22.7123 14.0167 23 12.5 23ZM7.85 4.325L7 2.475C7.85 1.99167 8.71267 1.625 9.588 1.375C10.4627 1.125 11.4333 1 12.5 1C14.3667 1 16.0833 1.429 17.65 2.287C19.2167 3.14567 20.5 4.28333 21.5 5.7V4H23.5V9H18.5V7H19.95C19.15 5.8 18.1 4.83333 16.8 4.1C15.5 3.36667 14.0667 3 12.5 3C11.6167 3 10.796 3.12067 10.038 3.362C9.27933 3.604 8.55 3.925 7.85 4.325ZM4.5 12L3.25 9.25L0.5 8L3.25 6.75L4.5 4L5.75 6.75L8.5 8L5.75 9.25L4.5 12ZM8.3 16L11.7 7H13.3L16.7 16H15.15L14.35 13.7H10.7L9.9 16H8.3ZM11.15 12.4H13.85L12.55 8.65H12.45L11.15 12.4Z"
            fill={color}
      />
    </Svg>
  );
};

AutopayDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default AutopayDs2Icon;
