import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const AttachFileDs2Icon = ({
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
        d="M12 22C10.4667 22 9.16667 21.4667 8.1 20.4C7.03333 19.3333 6.5 18.0333 6.5 16.5V6C6.5 4.9 6.89167 3.95833 7.675 3.175C8.45833 2.39167 9.4 2 10.5 2C11.6 2 12.5417 2.39167 13.325 3.175C14.1083 3.95833 14.5 4.9 14.5 6V15.5C14.5 16.2 14.2583 16.7917 13.775 17.275C13.2917 17.7583 12.7 18 12 18C11.3 18 10.7083 17.7583 10.225 17.275C9.74167 16.7917 9.5 16.2 9.5 15.5V6.75C9.5 6.53333 9.571 6.35433 9.713 6.213C9.85433 6.071 10.0333 6 10.25 6C10.4667 6 10.646 6.071 10.788 6.213C10.9293 6.35433 11 6.53333 11 6.75V15.5C11 15.7833 11.096 16.0207 11.288 16.212C11.4793 16.404 11.7167 16.5 12 16.5C12.2833 16.5 12.521 16.404 12.713 16.212C12.9043 16.0207 13 15.7833 13 15.5V6C13 5.3 12.7583 4.70833 12.275 4.225C11.7917 3.74167 11.2 3.5 10.5 3.5C9.8 3.5 9.20833 3.74167 8.725 4.225C8.24167 4.70833 8 5.3 8 6V16.5C8 17.6 8.39167 18.5417 9.175 19.325C9.95833 20.1083 10.9 20.5 12 20.5C13.1 20.5 14.0417 20.1083 14.825 19.325C15.6083 18.5417 16 17.6 16 16.5V6.75C16 6.53333 16.071 6.35433 16.213 6.213C16.3543 6.071 16.5333 6 16.75 6C16.9667 6 17.146 6.071 17.288 6.213C17.4293 6.35433 17.5 6.53333 17.5 6.75V16.5C17.5 18.0333 16.9667 19.3333 15.9 20.4C14.8333 21.4667 13.5333 22 12 22Z"
        fill={color}
      />
    </Svg>
  );
};

AttachFileDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default AttachFileDs2Icon;
