import { styled } from 'solid-styled-components';

export const CenteredBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DisplayFlex = styled.div<{
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  before?: string;
  after?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props?.flexDirection || 'row'};
  justify-content: ${(props) => props?.justifyContent || 'center'};
  align-items: ${(props) => props?.alignItems || 'center'};

  ${(props) => (props?.gap ? `gap: ${props.gap};` : '')}
  ${(props) => (props?.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props?.padding ? `padding: ${props.padding};` : '')}

  ${(props) => (props?.before ? `&::before { ${props.before} }` : '')}
  ${(props) => (props?.after ? `&::after { ${props.after} }` : '')}
`;
