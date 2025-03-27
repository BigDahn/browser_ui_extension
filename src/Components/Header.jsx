import React from "react";
import StyledHeader from "../ui/StyledHeader";
import Logo from "../ui/Logo";
import DarkModeToggle from "../ui/DarkModeToggle";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
