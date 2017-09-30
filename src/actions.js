import * as services from "./services";

export const types = {
  FETCH_CARDS_SUCCESS: "FETCH_CARDS_SUCCESS",
};


//actions creators
const toggleLoadingData = flag => {
  return {
    type: types.TOGGLE_LOADING_DATA,
    payload: flag
  };
};
const receiveCards = cards => {
  return {
    type: types.FETCH_CARDS_SUCCESS,
    payload: { cards: cards }
  };
};


//THUNKS
export const getCards = () => {
  return dispatch => {
    services
      .getCards()
      .then(
        response => {
          if (response.success)
            dispatch(receiveCards(response.cards));
        },
        error => {}
      );
  };
};
