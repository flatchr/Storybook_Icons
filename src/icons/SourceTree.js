import React, { useMemo } from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SourceTreeIcon = ({
  color = theme.colors.textPrimary,
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = useMemo(() => {
    let width = 448 * 16 / 512;
    let height = 16;
    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }
    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }
    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
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
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M427.2 203c0-112.1-90.9-203-203-203C112.1-.2 21.2 90.6 21 202.6A202.86 202.86 0 0 0 161.5 396v101.7a14.3 14.3 0 0 0 14.3 14.3h96.4a14.3 14.3 0 0 0 14.3-14.3V396.1A203.18 203.18 0 0 0 427.2 203zm-271.6 0c0-90.8 137.3-90.8 137.3 0-.1 89.9-137.3 91-137.3 0z"
        fill={color}
      />
    </Svg>
  );
};

SourceTreeIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default SourceTreeIcon;
