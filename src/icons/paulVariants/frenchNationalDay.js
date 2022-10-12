import React from 'react';
import { G, Path } from 'react-native-svg';

const FrenchNationalDayVariant = ({ stylePathDropShadow }) => {
  return (
    <G
      rotation={18}
      scale={0.07}
      translate="43,25"
      {...stylePathDropShadow}
    >
      <Path
        fill="#fff"
        d="M160 80h176v336H160z"
      />
      <Path
        fill="#3757A6"
        d="M160 80H48C21.6 80 0 99.2 0 126.4v243.2C0 396.8 21.6 416 48 416h112V80z"
      />
      <Path
        fill="#f00020"
        d="M448 80H336v336h112c26.4 0 48-19.2 48-46.4V126.4c0-27.2-21.6-46.4-48-46.4z"
        />
    </G>
  );
};

export default FrenchNationalDayVariant;
