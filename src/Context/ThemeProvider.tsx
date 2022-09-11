import React, { createContext, useReducer } from "react";

export interface ITheamPovider {
  darkMode: boolean;
}

export interface IThemeContext {
  state: ITheamPovider;
  dispatch: React.Dispatch<any>;
}

const initialState = { darkMode: true };

const ThemeContext = createContext<IThemeContext>({
  state: initialState,
  dispatch: () => {},
});

const themeReducer = (
  state: ITheamPovider,
  action: any
): typeof initialState => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default:
      throw new Error();
  }
};

const ThemeContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(
    themeReducer,
    initialState as ITheamPovider
  );
  const value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
