import React from 'react';
import Svg, { Path, G } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const EditNoteIcon = ({
  color = theme.colors.textPrimary,
  height = null,
  width = null,
}) => {
  return (

    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G>
        <Path d="M16.8621 12.5L15.0913 10.7292L15.6955 10.125C15.8483 9.97222 16.0427 9.89583 16.2788 9.89583C16.5149 9.89583 16.7094 9.97222 16.8621 10.125L17.4663 10.7292C17.6191 10.8819 17.6955 11.0764 17.6955 11.3125C17.6955 11.5486 17.6191 11.7431 17.4663 11.8958L16.8621 12.5ZM10.0913 17.5V15.7292L14.508 11.3125L16.2788 13.0833L11.8621 17.5H10.0913ZM2.59131 13.3333V11.6667H8.42464V13.3333H2.59131ZM2.59131 10V8.33333H11.758V10H2.59131ZM2.59131 6.66667V5H11.758V6.66667H2.59131Z"
              fill={color}
        />
      </G>
    </Svg>

  );
};

EditNoteIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default EditNoteIcon;
