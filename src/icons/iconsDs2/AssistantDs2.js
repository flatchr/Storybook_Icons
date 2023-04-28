import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const AssistantDs2Icon = ({
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
        d="M12.5 23L9.5 20H5.5C4.95 20 4.479 19.8043 4.087 19.413C3.69567 19.021 3.5 18.55 3.5 18V4C3.5 3.45 3.69567 2.979 4.087 2.587C4.479 2.19567 4.95 2 5.5 2H19.5C20.05 2 20.521 2.19567 20.913 2.587C21.3043 2.979 21.5 3.45 21.5 4V18C21.5 18.55 21.3043 19.021 20.913 19.413C20.521 19.8043 20.05 20 19.5 20H15.5L12.5 23ZM5.5 18H10.3L12.5 20.2L14.7 18H19.5V4H5.5V18ZM14.05 12.55L17.5 11L14.05 9.45L12.5 6L10.95 9.45L7.5 11L10.95 12.55L12.5 16L14.05 12.55Z"
        fill={color}
      />
    </Svg>
  );
};

AssistantDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default AssistantDs2Icon;
