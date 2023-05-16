import { useContext } from 'react';
import styled from 'styled-components';

import { TimelineContext } from './Timeline';

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.primary && '1.2rem'};
`;

export default function TimelineContent({ children, ...props }) {
  const { position, fancy } = useContext(TimelineContext);

  return (
    <Container position={position} {...props}>
      {children}
    </Container>
  );
}