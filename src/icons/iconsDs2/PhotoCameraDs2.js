import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const PhotoCameraDs2Icon = ({
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
        d="M12.5 17.5C13.75 17.5 14.8127 17.0627 15.688 16.188C16.5627 15.3127 17 14.25 17 13C17 11.75 16.5627 10.6873 15.688 9.812C14.8127 8.93733 13.75 8.5 12.5 8.5C11.25 8.5 10.1873 8.93733 9.312 9.812C8.43733 10.6873 8 11.75 8 13C8 14.25 8.43733 15.3127 9.312 16.188C10.1873 17.0627 11.25 17.5 12.5 17.5ZM12.5 15.5C11.8 15.5 11.2083 15.2583 10.725 14.775C10.2417 14.2917 10 13.7 10 13C10 12.3 10.2417 11.7083 10.725 11.225C11.2083 10.7417 11.8 10.5 12.5 10.5C13.2 10.5 13.7917 10.7417 14.275 11.225C14.7583 11.7083 15 12.3 15 13C15 13.7 14.7583 14.2917 14.275 14.775C13.7917 15.2583 13.2 15.5 12.5 15.5ZM4.5 21C3.95 21 3.47933 20.8043 3.088 20.413C2.696 20.021 2.5 19.55 2.5 19V7C2.5 6.45 2.696 5.97933 3.088 5.588C3.47933 5.196 3.95 5 4.5 5H7.65L9.5 3H15.5L17.35 5H20.5C21.05 5 21.521 5.196 21.913 5.588C22.3043 5.97933 22.5 6.45 22.5 7V19C22.5 19.55 22.3043 20.021 21.913 20.413C21.521 20.8043 21.05 21 20.5 21H4.5ZM20.5 19V7H16.45L14.625 5H10.375L8.55 7H4.5V19H20.5Z"
        fill={color}
      />
    </Svg>
  );
};

PhotoCameraDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default PhotoCameraDs2Icon;
