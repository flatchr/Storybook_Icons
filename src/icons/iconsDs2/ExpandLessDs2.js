import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ExpandLessDs2Icon = ({
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
        d="M7.20005 14.675C7.01672 14.4917 6.92505 14.2584 6.92505 13.975C6.92505 13.6917 7.01672 13.4584 7.20005 13.275L11.8 8.67502C11.9 8.57502 12.0084 8.50402 12.125 8.46202C12.2417 8.42069 12.3667 8.40002 12.5 8.40002C12.6334 8.40002 12.7584 8.42069 12.875 8.46202C12.9917 8.50402 13.1 8.57502 13.2 8.67502L17.825 13.3C18.0084 13.4834 18.1 13.7084 18.1 13.975C18.1 14.2417 18 14.475 17.8 14.675C17.6167 14.8584 17.3834 14.95 17.1 14.95C16.8167 14.95 16.5834 14.8584 16.4 14.675L12.5 10.775L8.57505 14.7C8.39172 14.8834 8.16672 14.975 7.90005 14.975C7.63338 14.975 7.40005 14.875 7.20005 14.675Z"
        fill={color}
      />
    </Svg>
  );
};

ExpandLessDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ExpandLessDs2Icon;
