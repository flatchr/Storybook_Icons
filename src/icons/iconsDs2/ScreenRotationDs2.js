import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const ScreenRotationDs2Icon = ({
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
        d="M12.675 21.4L4.25 13H7.1L14.1 20L19.1 15H16.5V13H22.5V19H20.5V16.4L15.5 21.4C15.1167 21.7834 14.646 21.975 14.088 21.975C13.5293 21.975 13.0583 21.7834 12.675 21.4ZM2.5 11V5.00002H4.5V7.60002L9.5 2.60002C9.88333 2.21669 10.3543 2.02502 10.913 2.02502C11.471 2.02502 11.9417 2.21669 12.325 2.60002L20.75 11H17.9L10.9 4.00002L5.9 9.00002H8.5V11H2.5Z"
        fill={color}
      />
    </Svg>
  );
};

ScreenRotationDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default ScreenRotationDs2Icon;
