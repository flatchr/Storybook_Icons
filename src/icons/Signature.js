import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const SignatureIcon = ({
  color = theme.colors.textPrimary,
  width = null,
  height = null,
}) => {

  return (
      <Svg
          width={width || height || 48}
          height={height || width || 48}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <Path
            d="M28 42Q27.4 42 26.95 41.55Q26.5 41.1 26.5 40.5Q26.5 39.85 26.95 39.425Q27.4 39 28 39Q30.95 39 32.975 37.8Q35 36.6 35 35Q35 33.85 33.525 32.75Q32.05 31.65 29.55 31.05L31.9 28.7Q35.05 29.65 36.525 31.325Q38 33 38 35Q38 38.35 34.95 40.175Q31.9 42 28 42ZM12 27.3Q8.8 26.6 7.4 25.1Q6 23.6 6 22Q6 20.25 7.3 18.85Q8.6 17.45 13.3 15.75Q16.6 14.55 17.55 13.8Q18.5 13.05 18.5 12.05Q18.5 10.8 17.4 9.9Q16.3 9 14 9Q12.65 9 11.7 9.35Q10.75 9.7 10 10.45Q9.6 10.85 8.975 10.925Q8.35 11 7.85 10.6Q7.3 10.2 7.275 9.6Q7.25 9 7.65 8.55Q8.5 7.45 10.2 6.725Q11.9 6 14 6Q17.4 6 19.45 7.625Q21.5 9.25 21.5 12.05Q21.5 14.1 20.075 15.525Q18.65 16.95 14.5 18.5Q11.15 19.75 10.075 20.475Q9 21.2 9 22Q9 22.8 10.35 23.525Q11.7 24.25 14.4 24.9ZM36.8 19.6 30.4 13.2 32.65 10.95Q33.55 10.05 34.65 10.05Q35.75 10.05 36.65 10.95L39.05 13.35Q39.95 14.25 39.95 15.35Q39.95 16.45 39.05 17.35ZM11 39H13.1L30.35 21.75L28.25 19.65L11 36.9ZM8 42V35.6L28.25 15.35L34.65 21.75L14.4 42ZM28.25 19.65 30.35 21.75Z"
            fill={color}
        />
      </Svg>
  );
};

SignatureIcon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number,
};

export default SignatureIcon;
