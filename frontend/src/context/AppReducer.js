export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_ITEM_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
