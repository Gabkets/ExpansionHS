import { types } from "./actions";

const initialState = {
  loading: false,
  cards: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING_DATA:
      return { ...state, loading: action.payload };
    case types.FETCH_CARDS_SUCCESS:
      const cards = [...action.payload.cards];
      return {
        ...state,
        cards: cards
      };
    default:
      return state;
  }
};
export default reducer;
