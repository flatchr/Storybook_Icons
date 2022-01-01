import React, { useMemo } from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

const StarIcon = ({
  color = '#000000',
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = useMemo(() => {
    let width = 576 * 16 / 512;
    let height = 16;
    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }
    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }
    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
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
      viewBox="0 0 576 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
        fill={color}
      />
    </Svg>
  );
};

StarIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default StarIcon;
