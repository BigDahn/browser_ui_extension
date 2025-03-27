import styled from "styled-components";
import Headers from "./Headers";

const Container = styled.div`
  font-size: 3rem;

  width: 80rem;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  color: var(--color-grey-0);
  font-weight: 700;
  text-align: center;
`;
function Empty() {
  return (
    <Container>
      <Headers as="h1">This Section is Currently Empty</Headers>
    </Container>
  );
}

export default Empty;
