import React, { useMemo } from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

const ChevronRight = ({
  color = '#000000',
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
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
        fill={color}
      />
    </Svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default ChevronRight;
