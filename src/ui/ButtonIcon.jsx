import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--color-indigo-700);
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-indigo-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-0);
  }
`;

export default StyledButton;
