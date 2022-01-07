import React, { useMemo } from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const FacebookIcon = ({
  color = theme.colors.textPrimary,
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = useMemo(() => {
    let width = 320 * 16 / 512;
    let height = 16;
    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }
    if (widthProp && !heightProp) {
      height = widthProp * 512 / 320;
      width = widthProp;
    }
    if (!widthProp && heightProp) {
      width = 320 * heightProp / 512;
      height = heightProp;
    }
    return {
      height,
      width,
    }
  }, [
    widthProp, heightProp,
  ]);

  return (
    <Svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 320 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        fill={color}
      />
    </Svg>
  );
};

FacebookIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default FacebookIcon;
