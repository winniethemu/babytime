import { useContext } from 'react';
import styled from 'styled-components';

import { TimelineContext } from './Timeline';

const Container = styled.li`
  display: flex;

  ${props => {
    if (props.position === 'left') {
      return 'flex-direction: row-reverse';
    } else if (props.position === 'alternate') {
      return `
        &:nth-of-type(even) {
          flex-direction: row-reverse;
        }
      `;
    } else { // default to right position
      return 'flex-direction: row';
    }
  }}
`;

export default function TimelineEvent({ children }) {
  const { position, fancy } = useContext(TimelineContext);

  return (
    <Container position={position} fancy={fancy}>
      {children}
    </Container>
  );
}