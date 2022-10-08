import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';

const servers = [
  { id: 1, name: 'test' },
  { id: 2, name: 'ttt' },
  { id: 3, name: 'test' },
  { id: 4, name: 'ttt' },
  { id: 5, name: 'test' },
  { id: 6, name: 'ttt' },
];

export const ServersList: Component = () => {
  const renderServers = () => {
    return (
      <For each={servers}>
        {(server) => {
          return <div>{server.name}</div>;
        }}
      </For>
    );
  };

  return <ServersContainer>{renderServers()}</ServersContainer>;
};

const ServersContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme?.colors.blue};
`;
