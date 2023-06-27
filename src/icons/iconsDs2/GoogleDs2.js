import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const GoogleDs2Icon = ({
    size = 24
}) => {

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4285F4"
        d="M24.245 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12.755 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C4.015 21.3 8.065 24 12.755 24Z"
      />
      <path
        fill="#FBBC05"
        d="M6.025 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12.755 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.705 1.19 15.995 0 12.755 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"
      />
    </Svg>
  );
};

GoogleDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default GoogleDs2Icon;
