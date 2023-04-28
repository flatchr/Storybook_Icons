import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CheckDs2Icon = ({
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
        d="M10.05 17.575C9.91667 17.575 9.79167 17.554 9.675 17.512C9.55833 17.4707 9.45 17.4 9.35 17.3L5.05 13C4.86667 12.8167 4.779 12.579 4.787 12.287C4.79567 11.9957 4.89167 11.7583 5.075 11.575C5.25833 11.3917 5.49167 11.3 5.775 11.3C6.05833 11.3 6.29167 11.3917 6.475 11.575L10.05 15.15L18.525 6.67499C18.7083 6.49166 18.946 6.39999 19.238 6.39999C19.5293 6.39999 19.7667 6.49166 19.95 6.67499C20.1333 6.85833 20.225 7.09566 20.225 7.38699C20.225 7.67899 20.1333 7.91666 19.95 8.09999L10.75 17.3C10.65 17.4 10.5417 17.4707 10.425 17.512C10.3083 17.554 10.1833 17.575 10.05 17.575Z"
        fill={color}
      />
    </Svg>
  );
};

CheckDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default CheckDs2Icon;
