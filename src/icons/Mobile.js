import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const MobileIcon = ({
  color = theme.colors.textPrimary,
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = () => {
    let width = 10 * 16 / 14;
    let height = 16;
    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }
    if (widthProp && !heightProp) {
      height = widthProp * 14 / 10;
      width = widthProp;
    }
    if (!widthProp && heightProp) {
      width = 10 * heightProp / 14;
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
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.33329 0.583333H2.66663C1.69829 0.583333 0.916626 1.365 0.916626 2.33333V11.6667C0.916626 12.635 1.69829 13.4167 2.66663 13.4167H7.33329C8.30163 13.4167 9.08329 12.635 9.08329 11.6667V2.33333C9.08329 1.365 8.30163 0.583333 7.33329 0.583333ZM6.16663 12.25H3.83329V11.6667H6.16663V12.25ZM8.06246 10.5H1.93746V2.33333H8.06246V10.5Z"
        fill={color}
      />
    </Svg>
  );
};

MobileIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default MobileIcon;
