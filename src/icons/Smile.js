import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SmileIcon = ({
  color = theme.colors.textPrimary,
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = () => {
    let width = 496 * 16 / 512;
    let height = 16;
    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }
    if (widthProp && !heightProp) {
      height = widthProp * 512 / 496;
      width = widthProp;
    }
    if (!widthProp && heightProp) {
      width = 496 * heightProp / 512;
      height = heightProp;
    }
    return {
      height,
      width,
    }
  };

  return (
    <Svg
      width={dimensions().width}
      height={dimensions().height}
      viewBox="0 0 496 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
        fill={color}
      />
    </Svg>
  );
};

SmileIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default SmileIcon;
