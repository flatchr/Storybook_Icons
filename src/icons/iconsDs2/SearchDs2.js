import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SearchDs2Icon = ({
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
        d="M19.4 20.3L13.8 14.7C13.3 15.1 12.725 15.4167 12.075 15.65C11.425 15.8833 10.7333 16 10 16C8.18333 16 6.646 15.371 5.388 14.113C4.12933 12.8543 3.5 11.3167 3.5 9.5C3.5 7.68333 4.12933 6.14567 5.388 4.887C6.646 3.629 8.18333 3 10 3C11.8167 3 13.3543 3.629 14.613 4.887C15.871 6.14567 16.5 7.68333 16.5 9.5C16.5 10.2333 16.3833 10.925 16.15 11.575C15.9167 12.225 15.6 12.8 15.2 13.3L20.825 18.925C21.0083 19.1083 21.1 19.3333 21.1 19.6C21.1 19.8667 21 20.1 20.8 20.3C20.6167 20.4833 20.3833 20.575 20.1 20.575C19.8167 20.575 19.5833 20.4833 19.4 20.3ZM10 14C11.25 14 12.3127 13.5627 13.188 12.688C14.0627 11.8127 14.5 10.75 14.5 9.5C14.5 8.25 14.0627 7.18733 13.188 6.312C12.3127 5.43733 11.25 5 10 5C8.75 5 7.68733 5.43733 6.812 6.312C5.93733 7.18733 5.5 8.25 5.5 9.5C5.5 10.75 5.93733 11.8127 6.812 12.688C7.68733 13.5627 8.75 14 10 14Z"
        fill={color}
      />
    </Svg>
  );
};

SearchDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default SearchDs2Icon;