import * as services from "./services";

export const types = {
  FETCH_CARDS_SUCCESS: "FETCH_CARDS_SUCCESS",
  FETCH_CLASSES_SUCCESS: "FETCH_CLASSES_SUCCESS"
};


//actions creators
const toggleLoadingData = flag => {
  return {
    type: types.TOGGLE_LOADING_DATA,
    payload: flag
  };
};

/*Fetching cards for CardList Component*/
const receiveCards = cards => {
  return {
    type: types.FETCH_CARDS_SUCCESS,
    payload: { cards: cards }
  };
};

/*Fetching Classes for CardNav Component*/
const receiveClasses = hclasses => {
  return {
    type: types.FETCH_CLASSES_SUCCESS,
    payload: { hclasses: hclasses }
  };
};


//THUNKS

/* Cards Fetch Thunk */
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

/* Classes Fetch Thunk */
export const getClasses = () => {
  return dispatch => {
    services
      .getClasses()
      .then(
        response => {
          if (response.success)
            dispatch(receiveClasses(response.hclasses));
        },
        error => {}
      );
  };
};

/* Cards from Class Fetch Thunk */
export const selectClassCards = (key) => {
  return dispatch => {
    services
      .selectClassCards(key)
      .then(
        response => {
          
          if (response.success)
            dispatch(receiveCards(response.cards));
        },
        error => {}
      );
  };
};
