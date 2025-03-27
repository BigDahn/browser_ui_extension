import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-600);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  width: 90rem;
  margin-top: 20px;
  padding: 0.4rem 1rem;

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export default StyledHeader;
