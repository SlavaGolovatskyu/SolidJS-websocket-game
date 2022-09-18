import { styled } from 'solid-styled-components';

export const CenteredBlock = styled.div<{
  display?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  position?: string;
}>`
  ${(props) => (props?.width ? `width: ${props.width};` : '')}
  ${(props) => (props?.height ? `height: ${props.height};` : '')}
  ${(props) => (props?.display ? `display: ${props.display};` : '')}
  ${(props) => (props?.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props?.padding ? `padding: ${props.padding};` : '')}

  position: ${(props) => props.position || 'absolute'};
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
