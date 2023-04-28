import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ErrorDs2Icon = ({
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
        d="M12.5 13C12.7833 13 13.021 12.904 13.213 12.712C13.4043 12.5207 13.5 12.2833 13.5 12V7.975C13.5 7.69167 13.4043 7.45833 13.213 7.275C13.021 7.09167 12.7833 7 12.5 7C12.2167 7 11.9793 7.09567 11.788 7.287C11.596 7.479 11.5 7.71667 11.5 8V12.025C11.5 12.3083 11.596 12.5417 11.788 12.725C11.9793 12.9083 12.2167 13 12.5 13ZM12.5 17C12.7833 17 13.021 16.904 13.213 16.712C13.4043 16.5207 13.5 16.2833 13.5 16C13.5 15.7167 13.4043 15.479 13.213 15.287C13.021 15.0957 12.7833 15 12.5 15C12.2167 15 11.9793 15.0957 11.788 15.287C11.596 15.479 11.5 15.7167 11.5 16C11.5 16.2833 11.596 16.5207 11.788 16.712C11.9793 16.904 12.2167 17 12.5 17ZM12.5 22C11.1167 22 9.81667 21.7373 8.6 21.212C7.38333 20.6873 6.325 19.975 5.425 19.075C4.525 18.175 3.81267 17.1167 3.288 15.9C2.76267 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.76267 9.31667 3.288 8.1C3.81267 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.31233 8.6 2.787C9.81667 2.26233 11.1167 2 12.5 2C13.8833 2 15.1833 2.26233 16.4 2.787C17.6167 3.31233 18.675 4.025 19.575 4.925C20.475 5.825 21.1873 6.88333 21.712 8.1C22.2373 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2373 14.6833 21.712 15.9C21.1873 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6873 16.4 21.212C15.1833 21.7373 13.8833 22 12.5 22ZM12.5 20C14.7167 20 16.6043 19.221 18.163 17.663C19.721 16.1043 20.5 14.2167 20.5 12C20.5 9.78333 19.721 7.89567 18.163 6.337C16.6043 4.779 14.7167 4 12.5 4C10.2833 4 8.396 4.779 6.838 6.337C5.27933 7.89567 4.5 9.78333 4.5 12C4.5 14.2167 5.27933 16.1043 6.838 17.663C8.396 19.221 10.2833 20 12.5 20Z"
        fill={color}
      />
    </Svg>
  );
};

ErrorDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ErrorDs2Icon;