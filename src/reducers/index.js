import { ADD_STOCK } from "../constants/action-types";

const initialState = {
  stocks: [],
  timeInterval: '30min'
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_STOCK:
      return {
        ...state,
        stocks: [...state.stocks, action.payload]
      }
    default:
      return state;
  }
}

export default rootReducer;