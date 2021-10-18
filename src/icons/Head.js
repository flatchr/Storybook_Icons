import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HeadIcon = ({
  color = '#000000',
  height = null,
  width = null,
}) => {
  return (
    <Svg
      width={width || 21}
      height={height || 21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.5 10.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM10.5.5C4.98.5.5 4.98.5 10.5s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0010.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"
        fill={color}
      />
    </Svg>
  );
};

export default HeadIcon;
