import React, { useMemo } from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

const UserClockIcon = ({
  color = '#000000',
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = useMemo(() => {
    let width = 640 * 16 / 512;
    let height = 16;
    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }
    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }
    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
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
      viewBox="0 0 640 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z"
        fill={color}
      />
    </Svg>
  );
};

UserClockIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default UserClockIcon;
