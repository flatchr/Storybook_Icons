import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const TableDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3.5 21V3H21.5V21H3.5ZM5.5 9H19.5V5H5.5V9ZM10.825 14H14.175V11H10.825V14ZM10.825 19H14.175V16H10.825V19ZM5.5 14H8.825V11H5.5V14ZM16.175 14H19.5V11H16.175V14ZM5.5 19H8.825V16H5.5V19ZM16.175 19H19.5V16H16.175V19Z"
              fill={color}
        />
    </Svg>

  );
};

TableDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default TableDs2Icon;
