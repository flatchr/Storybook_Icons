import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({
  color = '#000000',
  height = null,
  width = null,
}) => {
  return (
    <Svg
      width={width || 18}
      height={height || 16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17 0H1v2h16V0zm1 10V8l-1-5H1L0 8v2h1v6h10v-6h4v6h2v-6h1zm-9 4H3v-4h6v4z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
