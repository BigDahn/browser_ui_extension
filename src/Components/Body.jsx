import styled from "styled-components";
import { useBrowser } from "../contexts/BrowserContext";
import Heading from "./Heading";
import BrowserData from "./BrowserData";
import Empty from "../ui/Empty";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

const StyledBody = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 29rem 29rem 29rem;
  align-content: center;
  padding-bottom: 1rem;
  //grid-template-columns: repeat(3, auto);
  @media screen and (max-width: 600px) {
    display: grid;

    gap: 1rem;
    grid-template-columns: 1fr;
    align-items: center;
    padding-bottom: 1rem;
    justify-content: center;
  }
`;
function Body() {
  const { changedData } = useBrowser();

  return (
    <Main>
      <Heading />
      <StyledBody>
        {changedData.length < 1 ? (
          <Empty />
        ) : (
          changedData?.map((s, index) => {
            return <BrowserData data={s} key={index} name={s?.name} />;
          })
        )}
      </StyledBody>
    </Main>
  );
}

export default Body;
