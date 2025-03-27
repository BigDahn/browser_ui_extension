import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import Headers from "../ui/Headers";
import { useBrowser } from "../contexts/BrowserContext";

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function HeadingFilter() {
  const { initial, dispatch } = useBrowser();
  let all;
  if (initial === "all") {
    all = "all";
  }
  let inactive;
  if (initial === "Inactive") {
    inactive = "Inactive";
  }
  let active;
  if (initial === "active") {
    active = "active";
  }
  //
  console.log(initial);

  return (
    <StyledDiv>
      <Button onClick={() => dispatch({ type: "all" })} type={all}>
        <Headers as="h3">All</Headers>
      </Button>
      <Button onClick={() => dispatch({ type: "active" })} type={active}>
        <Headers as="h3">Active</Headers>
      </Button>
      <Button onClick={() => dispatch({ type: "Inactive" })} type={inactive}>
        <Headers as="h3">Inactive</Headers>
      </Button>
    </StyledDiv>
  );
}

export default HeadingFilter;
