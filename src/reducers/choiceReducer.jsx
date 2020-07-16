import * as actionTypes from '../actions/actionTypes';

const initialState = {
  choice: [],
  step: 'step1',
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

    case actionTypes.SET_STEP: {
      const newStep = action.data;
      return {
        ...state,
        step: newStep,
      };
    }

    default:
      return state;
  }
}
