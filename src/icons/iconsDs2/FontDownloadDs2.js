import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FontDownloadDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.3 18C8.48333 18 8.66667 17.9417 8.85 17.825C9.03333 17.7083 9.15833 17.5583 9.225 17.375L10.1 14.95H14.9L15.775 17.375C15.8417 17.5583 15.9623 17.7083 16.137 17.825C16.3123 17.9417 16.5 18 16.7 18C17.0833 18 17.3627 17.871 17.538 17.613C17.7127 17.3543 17.7333 17.0417 17.6 16.675L13.925 6.975C13.825 6.70833 13.6377 6.479 13.363 6.287C13.0877 6.09567 12.8 6 12.5 6C12.2167 6 11.9333 6.09567 11.65 6.287C11.3667 6.479 11.175 6.70833 11.075 6.975L7.4 16.675C7.26667 17.0417 7.28767 17.3543 7.463 17.613C7.63767 17.871 7.91667 18 8.3 18ZM10.7 13.2L12.45 8.25H12.55L14.3 13.2H10.7ZM4.5 22C3.95 22 3.47933 21.8043 3.088 21.413C2.696 21.021 2.5 20.55 2.5 20V4C2.5 3.45 2.696 2.979 3.088 2.587C3.47933 2.19567 3.95 2 4.5 2H20.5C21.05 2 21.521 2.19567 21.913 2.587C22.3043 2.979 22.5 3.45 22.5 4V20C22.5 20.55 22.3043 21.021 21.913 21.413C21.521 21.8043 21.05 22 20.5 22H4.5ZM4.5 20H20.5V4H4.5V20Z"
        fill={color}
      />
    </Svg>
  );
};

FontDownloadDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FontDownloadDs2Icon;
