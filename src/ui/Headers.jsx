import styled, { css } from "styled-components";

const StyledHeaders = styled.header`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      color: var(--color-grey-0);
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1rem;
      color: var(--color-grey-0);
      font-weight: 600;
      @media screen and (max-width: 600px) {
        font-size: 17px;
      }
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
    `}
`;

function Headers({ children, as }) {
  return <StyledHeaders as={as}>{children}</StyledHeaders>;
}

export default Headers;
