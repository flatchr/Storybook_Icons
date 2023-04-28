import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CloseDs2Icon = ({
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
        d="M12.5 13.4L7.60005 18.3C7.41672 18.4834 7.18338 18.575 6.90005 18.575C6.61672 18.575 6.38338 18.4834 6.20005 18.3C6.01672 18.1167 5.92505 17.8834 5.92505 17.6C5.92505 17.3167 6.01672 17.0834 6.20005 16.9L11.1 12L6.20005 7.10005C6.01672 6.91672 5.92505 6.68338 5.92505 6.40005C5.92505 6.11672 6.01672 5.88338 6.20005 5.70005C6.38338 5.51672 6.61672 5.42505 6.90005 5.42505C7.18338 5.42505 7.41672 5.51672 7.60005 5.70005L12.5 10.6L17.4 5.70005C17.5834 5.51672 17.8167 5.42505 18.1 5.42505C18.3834 5.42505 18.6167 5.51672 18.8 5.70005C18.9834 5.88338 19.075 6.11672 19.075 6.40005C19.075 6.68338 18.9834 6.91672 18.8 7.10005L13.9 12L18.8 16.9C18.9834 17.0834 19.075 17.3167 19.075 17.6C19.075 17.8834 18.9834 18.1167 18.8 18.3C18.6167 18.4834 18.3834 18.575 18.1 18.575C17.8167 18.575 17.5834 18.4834 17.4 18.3L12.5 13.4Z"
        fill={color}
      />
    </Svg>
  );
};

CloseDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default CloseDs2Icon;