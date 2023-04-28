import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FormatClearDs2Icon = ({
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
        d="M13.7 10.3501L8.34995 5.0001H19C19.4166 5.0001 19.7706 5.1461 20.062 5.4381C20.354 5.72943 20.5 6.08343 20.5 6.5001C20.5 6.91676 20.354 7.27076 20.062 7.5621C19.7706 7.8541 19.4166 8.0001 19 8.0001H14.7L13.7 10.3501ZM19.6 21.9001L12 14.3001L10.4 18.0751C10.2833 18.3584 10.096 18.5834 9.83795 18.7501C9.57929 18.9168 9.29995 19.0001 8.99995 19.0001C8.46662 19.0001 8.04995 18.7751 7.74995 18.3251C7.44995 17.8751 7.40828 17.4001 7.62495 16.9001L9.69995 12.0001L2.59995 4.9001C2.41662 4.71676 2.32495 4.48343 2.32495 4.2001C2.32495 3.91676 2.41662 3.68343 2.59995 3.5001C2.78328 3.31676 3.01662 3.2251 3.29995 3.2251C3.58328 3.2251 3.81662 3.31676 3.99995 3.5001L21 20.5001C21.1833 20.6834 21.275 20.9168 21.275 21.2001C21.275 21.4834 21.1833 21.7168 21 21.9001C20.8166 22.0834 20.5833 22.1751 20.2999 22.1751C20.0166 22.1751 19.7833 22.0834 19.6 21.9001Z"
        fill={color}
      />
    </Svg>
  );
};

FormatClearDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default FormatClearDs2Icon;
