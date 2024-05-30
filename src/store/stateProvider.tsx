import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type StateProviderProps = {
  children: React.ReactNode;
};

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
