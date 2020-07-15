import * as actionTypes from '../actions/actionTypes';

const initialState = {
  choice: [],
};

export default function choiceReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CARD_CHOICE: {
      const newChoice = action.data;
      return {
        ...state,
        choice: newChoice,
      };
    }
    default:
      return state;
  }
}
