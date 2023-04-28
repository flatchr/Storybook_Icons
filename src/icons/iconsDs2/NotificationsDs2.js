import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const NotificationsDs2Icon = ({
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
        d="M5.5 19C5.21667 19 4.979 18.904 4.787 18.712C4.59567 18.5207 4.5 18.2833 4.5 18C4.5 17.7167 4.59567 17.4793 4.787 17.288C4.979 17.096 5.21667 17 5.5 17H6.5V10C6.5 8.61667 6.91667 7.38733 7.75 6.312C8.58333 5.23733 9.66667 4.53333 11 4.2V3.5C11 3.08333 11.146 2.72933 11.438 2.438C11.7293 2.146 12.0833 2 12.5 2C12.9167 2 13.2707 2.146 13.562 2.438C13.854 2.72933 14 3.08333 14 3.5V4.2C15.3333 4.53333 16.4167 5.23733 17.25 6.312C18.0833 7.38733 18.5 8.61667 18.5 10V17H19.5C19.7833 17 20.0207 17.096 20.212 17.288C20.404 17.4793 20.5 17.7167 20.5 18C20.5 18.2833 20.404 18.5207 20.212 18.712C20.0207 18.904 19.7833 19 19.5 19H5.5ZM12.5 22C11.95 22 11.4793 21.8043 11.088 21.413C10.696 21.021 10.5 20.55 10.5 20H14.5C14.5 20.55 14.3043 21.021 13.913 21.413C13.521 21.8043 13.05 22 12.5 22ZM8.5 17H16.5V10C16.5 8.9 16.1083 7.95833 15.325 7.175C14.5417 6.39167 13.6 6 12.5 6C11.4 6 10.4583 6.39167 9.675 7.175C8.89167 7.95833 8.5 8.9 8.5 10V17Z"
        fill={color}
      />
    </Svg>
  );
};

NotificationsDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default NotificationsDs2Icon;
