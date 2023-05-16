import styled from 'styled-components';

const Container = styled.div`
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimelineEdge = styled.hr`
  width: 80px;
  height: 2px;
  border-width: 0;
  background-color: #BDBDBD;
  transform: rotate(90deg);
`;

const TimelineNode = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  padding: 6px;
  color: #FF5A5F;
  background-color: white;
  box-sizing: content-box;
  border: 2px solid #FF5A5F;
  border-radius: 50%;
`;

export default function TimelineAxis({ icon }) {
  return (
    <Container>
      <TimelineEdge />
      <TimelineNode>{icon}</TimelineNode>
    </Container>
  );
}