import React from 'react';
import { G, Path, Circle } from 'react-native-svg';

const EasterVariant = ({ stylePathDropShadow }) => {
  return (
    <G
      rotation={18}
      scale={0.085}
      translate="45,20"
      {...stylePathDropShadow}
    >
      <Path
        fill="#FFDF96"
        d="M381.23,384.488H130.772l-24.461,38.458C141.007,484.581,199.434,512,256.001,512   s114.994-27.419,149.69-89.054L381.23,384.488z"
      />
      <Path
        fill="#FFDF96"
        d="M256.001,0c-44.497,0-90.643,32.714-125.229,85.875l16.18,32.339h220.532l13.745-32.338   C346.643,32.714,300.497,0,256.001,0z"
      />
      <Path
        fill="#b7d5ac"
        d="M417.926,163.456l-50.442-45.242H146.953l-52.877,45.242c-12.12,36.912-19.236,78.278-19.236,122.187  c0,29.986,3.282,56.694,9.196,80.303l77.618,29.831h191.127l75.183-29.831c5.914-23.607,9.196-50.316,9.196-80.303  C437.162,241.734,430.046,200.368,417.926,163.456z"
      />
      <Path
        fill="#FF7B78"
        d="M333.02,108.08c-4.351,4.372-8.907,5.29-11.962,5.29c-3.056,0-7.612-0.918-11.963-5.29   c-14.368-14.435-33.223-22.386-53.096-22.386c-19.872,0-38.728,7.951-53.095,22.386c-4.351,4.372-8.906,5.29-11.962,5.29   c-3.056,0-7.611-0.918-11.962-5.289c-13.183-13.247-30.15-21.012-48.209-22.205c-14.641,22.504-27.205,48.672-36.697,77.581   c7.215-3.646,13.919-8.479,19.849-14.437c4.353-4.372,8.907-5.29,11.962-5.29c3.055,0,7.611,0.918,11.962,5.292   c14.367,14.435,33.223,22.385,53.095,22.385s38.728-7.949,53.096-22.386c4.351-4.372,8.906-5.29,11.961-5.29   s7.611,0.918,11.962,5.292c14.368,14.435,33.224,22.385,53.096,22.385c19.871,0,38.727-7.949,53.095-22.385   c4.351-4.373,8.907-5.29,11.963-5.29c3.055,0,7.609,0.918,11.961,5.292c5.93,5.958,12.634,10.791,19.849,14.437   c-9.492-28.909-22.056-55.076-36.697-77.581C363.171,87.068,346.203,94.834,333.02,108.08z"
      />
      <Path
        fill="#FF7B78"
        d="M386.116,352.921L386.116,352.921c-19.872,0-38.729,7.951-53.095,22.385   c-4.353,4.372-8.908,5.29-11.963,5.29c-3.056,0-7.612-0.918-11.963-5.29c-14.368-14.436-33.223-22.385-53.096-22.385   c-19.872,0-38.728,7.949-53.095,22.385c-4.351,4.372-8.907,5.29-11.962,5.29c-3.055,0-7.611-0.918-11.962-5.29   c-14.367-14.435-33.223-22.385-53.095-22.385c-0.001,0,0,0,0,0c-15.033,0-29.482,4.558-41.849,13.024   c5.396,21.54,12.983,40.498,22.275,57.002c2.65-2.052,5.2-4.277,7.613-6.701c4.353-4.373,8.907-5.29,11.962-5.29   c3.055,0,7.611,0.917,11.963,5.29c14.367,14.435,33.223,22.385,53.095,22.385s38.728-7.951,53.096-22.385   c4.351-4.373,8.906-5.29,11.961-5.29c3.055,0,7.611,0.917,11.963,5.29c14.367,14.435,33.223,22.385,53.095,22.385   c19.871,0,38.727-7.951,53.095-22.385c4.351-4.373,8.907-5.29,11.963-5.29c3.055,0,7.609,0.917,11.962,5.29   c2.413,2.425,4.963,4.65,7.613,6.701c9.29-16.504,16.877-35.461,22.273-57.001C415.599,357.478,401.151,352.921,386.116,352.921z"
      />
      <Circle
        fill="#FFDF96"
        cx="143.739"
        cy="263.659"
        r="32.318"
      />
      <Circle
        fill="#FFFFFF"
        cx="256"
        cy="263.659"
        r="32.318"
      />
      <Circle
        fill="#FFDF96"
        cx="368.272"
        cy="263.659"
        r="32.318"
      />
    </G>
  );
};

export default EasterVariant;
