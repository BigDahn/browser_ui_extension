import React from "react";
import styled, { css } from "styled-components";
import Headers from "../ui/Headers";
import Button from "../ui/Button";
import ToggleButton from "../ui/ToggleButton";
import { useBrowser } from "../contexts/BrowserContext";

const StyledBody = styled.div`
  // width: 29rem;
  border-radius: 9px;
  background-color: var(--color-grey-600);
  display: flex;
  flex-direction: column;

  gap: 3rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1.3rem;
  padding-bottom: 0.7rem;
  @media screen and (max-width: 600px) {
    width: 29rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 1.3rem;
    padding-bottom: 0.7rem;
  }
`;

const StyledRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  @media screen and (max-width: 600px) {
    display: flex;
    gap: 1rem;
    align-items: start;
    justify-content: center;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  font-size: 10px;
  color: var(--color-grey-0);

  ${(props) =>
    props.as === "remove" &&
    css`
      font-size: 1rem;
      color: var(--color-grey-0);
      font-weight: 600;

      &:hover {
        color: var(--color-grey-50);
      }
    `}
`;
const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function BrowserData({ data }) {
  const { dispatch } = useBrowser();
  const { description, isActive, logo, name } = data;

  return (
    <StyledBody>
      <StyledRow>
        <img src={logo} alt="name" width="40px" />
        <StyledHeading>
          <Headers as="h2">{name}</Headers>
          <StyledParagraph>{description}</StyledParagraph>
        </StyledHeading>
      </StyledRow>
      <StyledBottom>
        <Button
          type="remove"
          onClick={() => dispatch({ type: "remove", payload: name })}
        >
          <StyledParagraph as="remove">Remove</StyledParagraph>
        </Button>
        <ToggleButton isActive={isActive} name={name} />
      </StyledBottom>
    </StyledBody>
  );
}

export default BrowserData;
