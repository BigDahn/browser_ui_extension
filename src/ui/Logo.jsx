import styled from "styled-components";

const StyledImage = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 70%;
`;
function Logo() {
  return (
    <StyledImage>
      <Img src="/assets/images/logo.svg" alt="logo" />
    </StyledImage>
  );
}

export default Logo;
