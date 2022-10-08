import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import { InputLabel as StyledInput } from './InputLabel';
import { ServersList } from './ServersList';

export const JoinToTheRoom: Component = () => {
  return (
    <JoinContainer>
      <RowInput>
        <Input placeholder="Room id" />
      </RowInput>
      <Row>
        <ServersList />
      </Row>
    </JoinContainer>
  );
};

const Input = styled(StyledInput)`
  width: auto;
  display: block;
  background-color: ${({ theme }) => theme?.colors.blue};

  @media screen and (max-width: ${({ theme }) =>
      theme?.breakpoints.ms}) {
    width: fit-content;
  }
`;

const JoinContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const RowInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
`;
