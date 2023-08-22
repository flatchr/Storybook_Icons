import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';

const VisibilityOffDs2Icon = ({
  color = "#2B435E",
  size = 24,
}) => {

  return (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M16.6 13.3L15.15 11.85C15.3 11.0666 15.075 10.3333 14.475 9.64998C13.875 8.96664 13.1 8.69998 12.15 8.84998L10.7 7.39998C10.9834 7.26664 11.2707 7.16664 11.562 7.09998C11.854 7.03331 12.1667 6.99998 12.5 6.99998C13.75 6.99998 14.8127 7.43731 15.688 8.31198C16.5627 9.18731 17 10.24 17 11.5C17 11.8333 16.9667 12.146 16.9 12.438C16.8334 12.7293 16.7334 13.0166 16.6 13.3ZM19.8 16.45L18.35 15.05C18.9834 14.5666 19.546 14.0373 20.038 13.462C20.5294 12.8873 20.95 12.2333 21.3 11.5C20.4667 9.81664 19.2707 8.47898 17.712 7.48698C16.154 6.49564 14.4167 5.99998 12.5 5.99998C12.0167 5.99998 11.5417 6.03331 11.075 6.09998C10.6084 6.16664 10.15 6.26664 9.70005 6.39998L8.15005 4.84998C8.83338 4.56664 9.53338 4.35398 10.24 4.21198C10.9667 4.07064 11.7167 3.99998 12.5 3.99998C14.8834 3.99998 17.025 4.62898 18.925 5.88698C20.825 7.14564 22.24 8.78331 23.2001 10.8C23.24 10.8833 23.2834 10.9873 23.3 11.112C23.3167 11.2373 23.3251 11.3666 23.3251 11.5C23.3251 11.6333 23.3127 11.7623 23.288 11.887C23.2627 12.0123 23.2334 12.1166 23.2001 12.2C22.8167 13.05 22.3377 13.8333 21.7631 14.55C21.1877 15.2666 20.5334 15.9 19.8 16.45ZM19.6 21.9L16.1 18.45C15.5167 18.6333 14.9294 18.771 14.338 18.863C13.746 18.9543 13.1334 19 12.5 19C10.1167 19 7.97505 18.371 6.07505 17.113C4.17505 15.8543 2.75005 14.2166 1.80005 12.2C1.75005 12.1166 1.71672 12.0123 1.70005 11.887C1.68338 11.7623 1.67505 11.6333 1.67505 11.5C1.67505 11.3666 1.68338 11.2416 1.70005 11.125C1.71672 11.0083 1.75005 10.9083 1.80005 10.825C2.15005 10.075 2.56672 9.38331 3.05005 8.74998C3.53338 8.11664 4.06672 7.53331 4.65005 6.99998L2.57505 4.89998C2.39172 4.71664 2.30005 4.48731 2.30005 4.21198C2.30005 3.93731 2.40005 3.69998 2.60005 3.49998C2.78338 3.31664 3.01672 3.22498 3.30005 3.22498C3.58338 3.22498 3.81672 3.31664 4.00005 3.49998L21 20.5C21.1834 20.6833 21.2794 20.9126 21.288 21.188C21.296 21.4626 21.2001 21.7 21 21.9C20.8167 22.0833 20.5834 22.175 20.3 22.175C20.0167 22.175 19.7834 22.0833 19.6 21.9ZM6.05005 8.39998C5.56672 8.83331 5.12505 9.30831 4.72505 9.82498C4.32505 10.3416 3.98338 10.9 3.70005 11.5C4.53338 13.1833 5.72905 14.5206 7.28705 15.512C8.84572 16.504 10.5834 17 12.5 17C12.8334 17 13.1584 16.9793 13.475 16.938C13.7917 16.896 14.1167 16.85 14.45 16.8L13.55 15.85C13.3667 15.9 13.1917 15.9373 13.025 15.962C12.8584 15.9873 12.6834 16 12.5 16C11.24 16 10.1874 15.5626 9.31205 14.688C8.43738 13.8126 8.00005 12.75 8.00005 11.5C8.00005 11.3166 8.01238 11.1416 8.03705 10.975C8.06238 10.8083 8.10005 10.6333 8.15005 10.45L6.05005 8.39998Z"
              fill={color}
        />
    </svg>

  );
};

VisibilityOffDs2Icon.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  size: PropTypes.number,
};

export default VisibilityOffDs2Icon;
