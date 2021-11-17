import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const addToWatchlist = (item) => {
    dispatch({ type: "ADD_ITEM_TO_WATCHLIST", payload: item });
  };

  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_WATCHLIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
