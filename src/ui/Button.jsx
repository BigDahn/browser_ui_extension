import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 30px;
  border: none;
  border: 0.1px groove var(--color-blue-100);
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;

  color: var(--color-grey-0);
  background-color: var(--color-grey-50);

  ${(props) =>
    props.type === "all" &&
    css`
      font-size: 1rem;
      color: var(--color-grey-50);
      font-weight: 600;
      background-color: #f25c54;
    `}
  ${(props) =>
    props.type === "active" &&
    css`
      font-size: 1rem;
      color: var(--color-grey-50);
      font-weight: 600;
      background-color: #f25c54;
    `}
    ${(props) =>
    props.type === "Inactive" &&
    css`
      font-size: 1rem;
      color: var(--color-grey-50);
      font-weight: 600;
      background-color: #f25c54;
    `}

     ${(props) =>
    props.type === "remove" &&
    css`
      font-size: 1rem;
      font-weight: 700;
      &:hover {
        background-color: #f25c54;
      }
    `}


  &:active {
    background-color: red;
    border: none;
    outline: none;
  }
`;

function Button({ children, onClick, type }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;

//#f25c54
