import React from 'react';
import Svg, { Path, Mask, Rect, G } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const TrashIcon = ({
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

    <Svg
      width={dimensions().width}
      height={dimensions().height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="mask0_3033_143326"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={dimensions().width}
        height={dimensions().height}
        >
        <Rect
          width={dimensions().width}
          height={dimensions().height}
          fill={color}
        />
      </Mask>
      <G 
        mask="url(#mask0_3033_143326)"
      >
      <Path
        d="M6.4165 19.25C5.91234 19.25 5.48089 19.0706 5.12217 18.7119C4.76284 18.3526 4.58317 17.9208 4.58317 17.4167V5.5C4.32345 5.5 4.10559 5.41231 3.92959 5.23692C3.7542 5.06092 3.6665 4.84306 3.6665 4.58333C3.6665 4.32361 3.7542 4.10575 3.92959 3.92975C4.10559 3.75436 4.32345 3.66667 4.58317 3.66667H8.24984C8.24984 3.40694 8.33784 3.18908 8.51384 3.01308C8.68923 2.83769 8.90678 2.75 9.1665 2.75H12.8332C13.0929 2.75 13.3108 2.83769 13.4868 3.01308C13.6621 3.18908 13.7498 3.40694 13.7498 3.66667H17.4165C17.6762 3.66667 17.8938 3.75436 18.0692 3.92975C18.2452 4.10575 18.3332 4.32361 18.3332 4.58333C18.3332 4.84306 18.2452 5.06092 18.0692 5.23692C17.8938 5.41231 17.6762 5.5 17.4165 5.5V17.4167C17.4165 17.9208 17.2371 18.3526 16.8784 18.7119C16.5191 19.0706 16.0873 19.25 15.5832 19.25H6.4165ZM6.4165 5.5V17.4167H15.5832V5.5H6.4165ZM8.24984 14.6667C8.24984 14.9264 8.33784 15.1439 8.51384 15.3193C8.68923 15.4953 8.90678 15.5833 9.1665 15.5833C9.42623 15.5833 9.64409 15.4953 9.82009 15.3193C9.99548 15.1439 10.0832 14.9264 10.0832 14.6667V8.25C10.0832 7.99028 9.99548 7.77242 9.82009 7.59642C9.64409 7.42103 9.42623 7.33333 9.1665 7.33333C8.90678 7.33333 8.68923 7.42103 8.51384 7.59642C8.33784 7.77242 8.24984 7.99028 8.24984 8.25V14.6667ZM11.9165 14.6667C11.9165 14.9264 12.0045 15.1439 12.1805 15.3193C12.3559 15.4953 12.5734 15.5833 12.8332 15.5833C13.0929 15.5833 13.3108 15.4953 13.4868 15.3193C13.6621 15.1439 13.7498 14.9264 13.7498 14.6667V8.25C13.7498 7.99028 13.6621 7.77242 13.4868 7.59642C13.3108 7.42103 13.0929 7.33333 12.8332 7.33333C12.5734 7.33333 12.3559 7.42103 12.1805 7.59642C12.0045 7.77242 11.9165 7.99028 11.9165 8.25V14.6667Z"
        fill={color}
      />
      </G>
    </Svg>
  );
};

TrashIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default TrashIcon;
