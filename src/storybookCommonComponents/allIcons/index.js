import React from 'react';
import { linkTo } from '@storybook/addon-links';
import * as allIcons from '../../index';

import {
  Wrapper,
  Item,
} from './style';

const AllIcons = props => {
  const { color } = props;
  const keys = Object.keys(allIcons)
    .filter(x => x !== 'LogoFlatchr')
    .sort((a, b) => a.toLowerCase() === b.toLowerCase()
      ? 0
      : a.toLowerCase() < b.toLowerCase() ? -1 : 1);

  return (
    <Wrapper>
      {keys
        .map((iconName, iconIndex) => {
          const iconComponent = allIcons[iconName]
            ({ color, height: 30 });

        return (
          <Item
            key={`icon-${iconName}-${iconIndex}`}
            title={iconName}
            onClick={linkTo(`icons-${iconName.replace(/([A-Z])/g, '-$1').toLowerCase()}-story`)}
          >
            {iconComponent}
          </Item>
        )
      })}
    </Wrapper>
  );
};

export default AllIcons;
