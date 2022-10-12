import { G, Path } from 'react-native-svg';

const HeartVariant = ({
  isSaintValentineEvent = false,
  stylePathDropShadow
}) => {
  return (
    <G
      rotation={18}
      scale={0.065}
      translate="38,25"
      {...stylePathDropShadow}
    >
      <Path
        d="M251.332 420.609C251.332 420.609 296.591 394.083 348.517 353.313H154.148C206.075 394.083 251.332 420.609 251.332 420.609"
        fill={isSaintValentineEvent ? '#F00020' : '#68329A'}
      />
      <Path
        d="M154.148 353.313H348.517C374.869 332.624 402.936 308.268 427.68 281.845H74.9867C99.7307 308.268 127.797 332.624 154.148 353.313"
        fill={isSaintValentineEvent ? '#F00020' : '#385FB5'}
      />
      <Path
        d="M74.9867 281.845H427.68C448.885 259.201 467.648 235.043 480.793 210.376H21.8729C35.0188 235.043 53.7813 259.201 74.9867 281.845"
        fill={isSaintValentineEvent ? '#F00020' : '#11AB51'}
      />
      <Path
        d="M4.36506 162.664C7.34586 178.599 13.4599 194.592 21.8729 210.376H480.793C489.207 194.592 495.32 178.599 498.3 162.664C499.817 154.555 500.84 146.628 501.373 138.908H1.29266C1.82653 146.628 2.84839 154.555 4.36506 162.664Z"
        fill={isSaintValentineEvent ? '#F00020' : '#FEE314'}
      />
      <Path
        d="M1.29265 138.908H501.373C503.224 112.167 499.141 87.936 488.836 67.4387H13.8312C3.52545 87.936 -0.557351 112.167 1.29265 138.908Z"
        fill={isSaintValentineEvent ? '#F00020' : '#F3622A'}
      />
      <Path
        d="M383.963 1.68137C289.749 -12.0386 251.332 65.6654 251.332 65.6654C251.332 65.6654 212.916 -12.0386 118.703 1.68137C65.544 9.4227 31.0292 33.2347 13.8312 67.4387H488.836C471.639 33.2347 437.123 9.4227 383.963 1.68137"
        fill={isSaintValentineEvent ? '#F00020' : '#EE2544'}
      />
    </G>
  );
};

export default HeartVariant;
