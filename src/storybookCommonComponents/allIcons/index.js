import React from 'react';
import { linkTo } from '@storybook/addon-links';
import * as allIcons from '../../index';
import careerSpecific from './career-specific';

import {
  Wrapper,
  ItemsWrapper,
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
      <p>
        The librairy contains {keys.length} icons.
      </p>
      <ItemsWrapper>
      {keys.map((iconName, iconIndex) => {

        const iconComponent = allIcons[iconName]({ color, height: 30 });
        const isCareerSpecific = careerSpecific.includes(iconName);

        return (
          <Item
            key={`icon-${iconName}-${iconIndex}`}
            title={iconName}
            onClick={
              linkTo(`iconography-${isCareerSpecific ? 'career' : 'icons'}-${iconName.replace(/([A-Z])/g, '-$1').toLowerCase()}-story`)
            }
          >
            {iconComponent}
          </Item>
        )
        })}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default AllIcons;
