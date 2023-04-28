import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const DoneAllDs2Icon = ({
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
         d="M7.2 17.6C7.06667 17.6 6.94167 17.575 6.825 17.525C6.70833 17.475 6.6 17.4 6.5 17.3L2.275 13.075C2.09167 12.8917 2 12.654 2 12.362C2 12.0707 2.09167 11.8334 2.275 11.65C2.45833 11.4667 2.69167 11.375 2.975 11.375C3.25833 11.375 3.49167 11.4667 3.675 11.65L8.625 16.6L7.9 17.3C7.8 17.4 7.69167 17.475 7.575 17.525C7.45833 17.575 7.33333 17.6 7.2 17.6ZM12.85 17.575C12.7167 17.575 12.5917 17.554 12.475 17.512C12.3583 17.4707 12.25 17.4 12.15 17.3L7.9 13.05C7.71667 12.8667 7.625 12.629 7.625 12.337C7.625 12.0457 7.71667 11.8084 7.9 11.625C8.08333 11.4417 8.31667 11.35 8.6 11.35C8.88333 11.35 9.11667 11.4417 9.3 11.625L12.85 15.175L21.35 6.67502C21.5333 6.49169 21.7667 6.40002 22.05 6.40002C22.3333 6.40002 22.5667 6.49169 22.75 6.67502C22.9333 6.85836 23.025 7.09569 23.025 7.38702C23.025 7.67902 22.9333 7.91669 22.75 8.10002L13.55 17.3C13.45 17.4 13.3417 17.4707 13.225 17.512C13.1083 17.554 12.9833 17.575 12.85 17.575ZM12.85 12.35L11.425 10.95L15.675 6.70002C15.8583 6.51669 16.0957 6.42502 16.387 6.42502C16.679 6.42502 16.9167 6.51669 17.1 6.70002C17.2833 6.88336 17.375 7.11669 17.375 7.40002C17.375 7.68336 17.2833 7.91669 17.1 8.10002L12.85 12.35Z"
        fill={color}
      />
    </Svg>
  );
};

DoneAllDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default DoneAllDs2Icon;