import React from "react";
import HeadingFilter from "./HeadingFilter";
import StyledHeading from "../ui/Heading";
import Headers from "../ui/Headers";

function Heading() {
  return (
    <StyledHeading>
      <Headers as="h1">Extension List</Headers>
      <HeadingFilter />
    </StyledHeading>
  );
}

export default Heading;
