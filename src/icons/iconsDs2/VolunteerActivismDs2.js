import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const VolunteerActivismDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M16.5 12.675C16.3833 12.675 16.271 12.6583 16.163 12.625C16.0543 12.5917 15.9583 12.5333 15.875 12.45C14.4417 11.15 13.1877 9.896 12.113 8.688C11.0377 7.47933 10.5 6.35 10.5 5.3C10.5 4.36667 10.8167 3.58333 11.45 2.95C12.0833 2.31667 12.8667 2 13.8 2C14.3333 2 14.8333 2.11233 15.3 2.337C15.7667 2.56233 16.1667 2.86667 16.5 3.25C16.8333 2.86667 17.2333 2.56233 17.7 2.337C18.1667 2.11233 18.6667 2 19.2 2C20.1333 2 20.9167 2.31667 21.55 2.95C22.1833 3.58333 22.5 4.36667 22.5 5.3C22.5 6.35 21.9627 7.47933 20.888 8.688C19.8127 9.896 18.5583 11.15 17.125 12.45C17.0417 12.5333 16.9457 12.5917 16.837 12.625C16.729 12.6583 16.6167 12.675 16.5 12.675ZM16.5 10.3C17.4833 9.36667 18.396 8.43733 19.238 7.512C20.0793 6.58733 20.5 5.85 20.5 5.3C20.5 4.91667 20.3793 4.604 20.138 4.362C19.896 4.12067 19.5833 4 19.2 4C18.9667 4 18.746 4.04567 18.538 4.137C18.3293 4.229 18.15 4.36667 18 4.55L16.5 6.35L15 4.55C14.85 4.36667 14.671 4.229 14.463 4.137C14.2543 4.04567 14.0333 4 13.8 4C13.4167 4 13.1043 4.12067 12.863 4.362C12.621 4.604 12.5 4.91667 12.5 5.3C12.5 5.85 12.9207 6.58733 13.762 7.512C14.604 8.43733 15.5167 9.36667 16.5 10.3ZM14.45 20.4L20.4 18.55C20.3167 18.4 20.196 18.271 20.038 18.163C19.8793 18.0543 19.7 18 19.5 18H14.45C14 18 13.6417 17.9833 13.375 17.95C13.1083 17.9167 12.8333 17.85 12.55 17.75L11.125 17.275C10.8583 17.1917 10.6667 17.025 10.55 16.775C10.4333 16.525 10.4167 16.2667 10.5 16C10.5833 15.7333 10.746 15.5373 10.988 15.412C11.2293 15.2873 11.4833 15.2667 11.75 15.35L12.8 15.7C13.0833 15.7833 13.4043 15.85 13.763 15.9C14.121 15.95 14.6083 15.9833 15.225 16H15.5C15.5 15.8167 15.446 15.6417 15.338 15.475C15.2293 15.3083 15.1 15.2 14.95 15.15L9.1 13H7.5V18.5L14.45 20.4ZM13.925 22.35L7.5 20.55C7.36667 20.9833 7.10433 21.3333 6.713 21.6C6.321 21.8667 5.91667 22 5.5 22H3.5C2.95 22 2.47933 21.8043 2.088 21.413C1.696 21.021 1.5 20.55 1.5 20V13C1.5 12.45 1.696 11.979 2.088 11.587C2.47933 11.1957 2.95 11 3.5 11H9.1C9.21667 11 9.33333 11.0123 9.45 11.037C9.56667 11.0623 9.675 11.0917 9.775 11.125L15.65 13.3C16.2 13.5 16.646 13.85 16.988 14.35C17.3293 14.85 17.5 15.4 17.5 16H19.5C20.3333 16 21.0417 16.275 21.625 16.825C22.2083 17.375 22.5 18.1 22.5 19C22.5 19.3667 22.404 19.6543 22.212 19.863C22.0207 20.071 21.725 20.2417 21.325 20.375L15.075 22.325C14.8917 22.3917 14.7 22.425 14.5 22.425C14.3 22.425 14.1083 22.4 13.925 22.35ZM3.5 20H5.5V13H3.5V20Z"
              fill={color}
        />
    </Svg>

  );
};

VolunteerActivismDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default VolunteerActivismDs2Icon;