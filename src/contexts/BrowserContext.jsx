import { createContext, useContext, useEffect, useReducer } from "react";
//import dsata from "../../data.json";

const BrowserContext = createContext();

const initialState = {
  status: "loading",
  initial: "",
  data: [],
  changedData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        data: action.payload,
        changedData: action.payload,
        status: "ready",
        initial: "all",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "toggle":
      //console.log(action);
      const New_data = state.data.map((s) => {
        if (s.name === action.payload) {
          return {
            ...s,
            isActive: !s.isActive,
          };
        }
        return s;
      });
      const New_data2 = state.changedData.map((s) => {
        if (s.name === action.payload) {
          return {
            ...s,
            isActive: !s.isActive,
          };
        }
        return s;
      });
      console.log(state.data);
      console.log(New_data);
      console.log(New_data2);
      console.log(state.initial);

      return {
        ...state,
        data: New_data,
        changedData: New_data2,
      };

    case "Inactive":
      const Updated_data = state.data.filter((s) => s.isActive === false);
      console.log(Updated_data);

      return {
        ...state,
        changedData: Updated_data,
        initial: "Inactive",
      };
    case "active":
      const Active_Data = state.data.filter((s) => s.isActive === true);
      console.log(state.data);
      console.log(state.changedData);
      return {
        ...state,
        changedData: Active_Data,
        initial: "active",
      };
    case "all":
      console.log(state.data);
      console.log(state.changedData);
      return {
        ...state,
        changedData: state.data,
        initial: "all",
      };
    case "remove":
      //console.log(action);
      const filteredData = state.data.filter((s) => s.name !== action.payload);
      const filteredData_2 = state.changedData.filter(
        (s) => s.name !== action.payload
      );

      return {
        ...state,
        data: filteredData,
        changedData: filteredData_2,
      };

    default:
      break;
  }
}

function BrowserProvider({ children }) {
  useEffect(function () {
    fetch("../../data.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  const [{ status, initial, changedData, data }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <BrowserContext.Provider
      value={{ status, initial, changedData, data, dispatch }}
    >
      {children}
    </BrowserContext.Provider>
  );
}

function useBrowser() {
  const context = useContext(BrowserContext);
  if (context === undefined) throw new Error("QuizContext was used outside ");
  return context;
}

export { BrowserProvider, useBrowser };
