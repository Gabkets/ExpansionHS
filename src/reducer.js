import { types } from "./actions";

const initialState = {
  loading: false,
  cards: [],
  hclasses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.TOGGLE_LOADING_DATA:
      return { ...state, loading: action.payload };

    // Displatch Cards
    case types.FETCH_CARDS_SUCCESS:
      const cards = [...action.payload.cards];
      return {
        ...state,
        cards: cards
      };
    //END

    // Displatch Classes
    case types.FETCH_CLASSES_SUCCESS:
      const hclasses = [...action.payload.hclasses];
      return {
        ...state,
        hclasses: hclasses
      };
    //END

    default:
      return state;
  }
};
export default reducer;
