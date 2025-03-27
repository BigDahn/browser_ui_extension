import "../styles/Switch.css";
import { useBrowser } from "../contexts/BrowserContext";

function ToggleButton({ isActive, name }) {
  // console.log(name);
  const { dispatch } = useBrowser();

  function handleChange(name) {
    dispatch({ type: "toggle", payload: name });
    //console.log(name);
  }

  return (
    <div>
      <label class="toggle-switch">
        <input
          type="checkbox"
          checked={isActive}
          onChange={() => handleChange(name)}
        />
        <span class="slider"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
