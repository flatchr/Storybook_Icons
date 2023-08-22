import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const AddCircleDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 17C12.7833 17 13.021 16.904 13.213 16.712C13.4043 16.5207 13.5 16.2833 13.5 16V13H16.525C16.8083 13 17.0417 12.904 17.225 12.712C17.4083 12.5207 17.5 12.2833 17.5 12C17.5 11.7167 17.404 11.479 17.212 11.287C17.0207 11.0957 16.7833 11 16.5 11H13.5V7.975C13.5 7.69167 13.4043 7.45833 13.213 7.275C13.021 7.09167 12.7833 7 12.5 7C12.2167 7 11.9793 7.09567 11.788 7.287C11.596 7.479 11.5 7.71667 11.5 8V11H8.475C8.19167 11 7.95833 11.0957 7.775 11.287C7.59167 11.479 7.5 11.7167 7.5 12C7.5 12.2833 7.59567 12.5207 7.787 12.712C7.979 12.904 8.21667 13 8.5 13H11.5V16.025C11.5 16.3083 11.596 16.5417 11.788 16.725C11.9793 16.9083 12.2167 17 12.5 17ZM12.5 22C11.1167 22 9.81667 21.7373 8.6 21.212C7.38333 20.6873 6.325 19.975 5.425 19.075C4.525 18.175 3.81267 17.1167 3.288 15.9C2.76267 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.76267 9.31667 3.288 8.1C3.81267 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.31233 8.6 2.787C9.81667 2.26233 11.1167 2 12.5 2C13.8833 2 15.1833 2.26233 16.4 2.787C17.6167 3.31233 18.675 4.025 19.575 4.925C20.475 5.825 21.1873 6.88333 21.712 8.1C22.2373 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2373 14.6833 21.712 15.9C21.1873 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6873 16.4 21.212C15.1833 21.7373 13.8833 22 12.5 22ZM12.5 20C14.7167 20 16.6043 19.221 18.163 17.663C19.721 16.1043 20.5 14.2167 20.5 12C20.5 9.78333 19.721 7.89567 18.163 6.337C16.6043 4.779 14.7167 4 12.5 4C10.2833 4 8.396 4.779 6.838 6.337C5.27933 7.89567 4.5 9.78333 4.5 12C4.5 14.2167 5.27933 16.1043 6.838 17.663C8.396 19.221 10.2833 20 12.5 20Z" 
        fill={color}
      />
    </svg>
  );
};

AddCircleDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default AddCircleDs2Icon;
