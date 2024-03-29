import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const DesktopIcon = ({
  color = theme.colors.textPrimary,
  width: widthProp = null,
  height: heightProp = null,
}) => {

  const dimensions = () => {
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
  };

  return (
    <svg
        width={dimensions().width}
        height={dimensions().height}
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 17C1.45 17 0.979333 16.8043 0.588 16.413C0.196 16.021 0 15.55 0 15H4C3.45 15 2.97933 14.8043 2.588 14.413C2.196 14.021 2 13.55 2 13V2C2 1.45 2.196 0.979 2.588 0.587C2.97933 0.195667 3.45 0 4 0H20C20.55 0 21.021 0.195667 21.413 0.587C21.8043 0.979 22 1.45 22 2V13C22 13.55 21.8043 14.021 21.413 14.413C21.021 14.8043 20.55 15 20 15H24C24 15.55 23.8043 16.021 23.413 16.413C23.021 16.8043 22.55 17 22 17H2ZM12 16C12.2833 16 12.521 15.904 12.713 15.712C12.9043 15.5207 13 15.2833 13 15C13 14.7167 12.9043 14.4793 12.713 14.288C12.521 14.096 12.2833 14 12 14C11.7167 14 11.4793 14.096 11.288 14.288C11.096 14.4793 11 14.7167 11 15C11 15.2833 11.096 15.5207 11.288 15.712C11.4793 15.904 11.7167 16 12 16ZM4 13H20V2H4V13Z"
            fill={color}
        />
    </svg>
  );
};

DesktopIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default DesktopIcon;
