import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import StyledButton from "./ButtonIcon";
import { useTheme } from "../contexts/DarkContext";

function DarkModeToggle() {
  const { darkMode, handleToggle } = useTheme();
  return (
    <StyledButton onClick={handleToggle}>
      {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </StyledButton>
  );
}

export default DarkModeToggle;
