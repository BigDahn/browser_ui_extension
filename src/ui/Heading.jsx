import styled from "styled-components";

const StyledHeading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90rem;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default StyledHeading;
