import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const CaretDownIcon = ({
  color = theme.colors.textPrimary,
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = () => {
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
  };

  return (
    <svg
      width={dimensions().width}
      height={dimensions().height}
      viewBox="0 0 320 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        fill={color}
      />
    </svg>
  );
};

CaretDownIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default CaretDownIcon;
