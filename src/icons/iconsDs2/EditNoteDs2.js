import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const EditNoteDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20.625 15L18.5 12.875L19.225 12.15C19.4083 11.9667 19.6417 11.875 19.925 11.875C20.2083 11.875 20.4417 11.9667 20.625 12.15L21.35 12.875C21.5333 13.0583 21.625 13.2917 21.625 13.575C21.625 13.8583 21.5333 14.0917 21.35 14.275L20.625 15ZM12.5 21V18.875L17.8 13.575L19.925 15.7L14.625 21H12.5ZM3.5 16V14H10.5V16H3.5ZM3.5 12V10H14.5V12H3.5ZM3.5 8V6H14.5V8H3.5Z"
        fill={color}
      />
    </Svg>
  );
};

EditNoteDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default EditNoteDs2Icon;
