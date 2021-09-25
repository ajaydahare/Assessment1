function todoReducer(state = { items: [], selectItem: null }, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_ALL_ITEMS":
      return { ...state, items: action.payload };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "SELECT_ITEM":
      return { ...state, selectItem: action.payload };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}

export default todoReducer;
