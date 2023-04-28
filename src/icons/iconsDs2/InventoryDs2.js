import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const InventoryDs2Icon = ({
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
        d="M11.5 21H5.5C4.95 21 4.479 20.8043 4.087 20.413C3.69567 20.021 3.5 19.55 3.5 19V5C3.5 4.45 3.69567 3.979 4.087 3.587C4.479 3.19567 4.95 3 5.5 3H9.675C9.85833 2.41667 10.2167 1.93733 10.75 1.562C11.2833 1.18733 11.8667 1 12.5 1C13.1667 1 13.7627 1.18733 14.288 1.562C14.8127 1.93733 15.1667 2.41667 15.35 3H19.5C20.05 3 20.521 3.19567 20.913 3.587C21.3043 3.979 21.5 4.45 21.5 5V10H19.5V5H17.5V8H7.5V5H5.5V19H11.5V21ZM16 19.925L11.75 15.675L13.15 14.275L16 17.125L21.65 11.475L23.05 12.875L16 19.925ZM12.5 5C12.7833 5 13.021 4.904 13.213 4.712C13.4043 4.52067 13.5 4.28333 13.5 4C13.5 3.71667 13.4043 3.479 13.213 3.287C13.021 3.09567 12.7833 3 12.5 3C12.2167 3 11.9793 3.09567 11.788 3.287C11.596 3.479 11.5 3.71667 11.5 4C11.5 4.28333 11.596 4.52067 11.788 4.712C11.9793 4.904 12.2167 5 12.5 5Z"
        fill={color}
      />
    </Svg>
  );
};

InventoryDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default InventoryDs2Icon;
