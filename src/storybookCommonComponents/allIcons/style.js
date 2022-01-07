import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(50px,1fr));
  grid-auto-rows: auto;
  grid-gap: 5px;
  height: inherit;
  min-height: 50px;
  padding-right: 0;
  max-width: 650px;
`;

export const Item = styled.div`
  align-items: center;
  border: 1px solid ${p => p.theme.colors.neutral200};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  &:hover {
    border-color: ${p => p.theme.colors.primary400};
  }
`;
