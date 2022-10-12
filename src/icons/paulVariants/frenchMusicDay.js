import { G, Path, Circle } from 'react-native-svg';

const FrenchMusicDayVariant = ({ stylePathDropShadow }) => {
  return (
    <G
      rotation={20}
      scale={0.22}
      translate="40,8"
      {...stylePathDropShadow}
    >
      <Path
        fill="#fd912c"
        d="M196.58 211.812c-7.042-12.521-13.424-15.875-7.949-48.67 6.466-38.744-36.429-38.761-43.142-38.763-6.714-.003-49.609-.019-44.631 38.73 4.203 32.717.358 36.44-6.53 48.665-9.756 17.164-25.866 76.682 49.872 79.079v.03c.416 0 .814-.011 1.226-.015.411.004.81.016 1.226.016v-.03c75.74-2.341 59.67-61.871 49.928-79.042z"
      />
      <Circle
        fill="#d12200"
        cx={145.467}
        cy={184.456}
        r={24.076}
      />
      <Circle
        fill="#8e3300"
        cx={145.467}
        cy={184.455}
        r={18.33}
      />
      <Path
        transform="rotate(-180 145.442 235.55)"
        fill="#8e3300"
        d="M120.361 231.039h50.162v9.022h-50.162z"
      />
      <Path
        fill="#8e3300"
        d="M137.343 36.156h16.303v146.901h-16.303z"
      />
      <Circle
        fill="#8e3300"
        cx={130.885}
        cy={8.949}
        r={2.904}
      />
      <Circle
        fill="#8e3300"
        cx={130.885}
        cy={19.604}
        r={2.904}
      />
      <Circle
        fill="#8e3300"
        cx={130.885}
        cy={30.258}
        r={2.904}
      />
      <Circle
        fill="#8e3300"
        cx={159.943}
        cy={8.949}
        r={2.904}
      />
      <Circle
        fill="#8e3300"
        cx={159.943}
        cy={19.604}
        r={2.904}
      />
      <Circle
        fill="#8e3300"
        cx={159.943}
        cy={30.258}
        r={2.904}
      />
      <Path
        fill="#8e3300"
        d="M145.523 0c-6.448-.002-11.724.405-11.727 6.852l-.008 25.98c-.003 6.447 5.271 14.606 11.719 14.609 6.447.002 11.724-8.153 11.726-14.601l.009-25.98C157.244.414 151.971.003 145.523 0zm-3.405 33.438a2.562 2.562 0 0 1-2.555 2.555 2.562 2.562 0 0 1-2.554-2.555V8.356a2.562 2.562 0 0 1 2.554-2.554 2.562 2.562 0 0 1 2.555 2.554v25.082zm11.903 0a2.562 2.562 0 0 1-2.555 2.555 2.562 2.562 0 0 1-2.554-2.555V8.356a2.562 2.562 0 0 1 2.554-2.554 2.562 2.562 0 0 1 2.555 2.554v25.082z"
      />
      <Path
        style={{
          stroke: "#e2dab3",
          strokeWidth: 0.5391,
          strokeMiterlimit: 10,
        }}
        d="M138.969 35.273v198.122M143.284 35.273v198.122M147.6 35.273v198.122M151.915 35.273v198.122"
      />
      <Path
        transform="rotate(-180 145.442 233.393)"
        fill="#8e3300"
        d="M127.98 230.252h34.924v6.281H127.98z"
      />
    </G>
  );
};

export default FrenchMusicDayVariant;
