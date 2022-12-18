import { DEPOSIT, WITHDRAW, RESET } from "./actionTypes";

const initialState = {
  amount: 0,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT: {
      return {
        ...state,
        amount: state.amount + action.payload,
        error: ""
      };
    }

    case WITHDRAW: {
      if (state.amount === 0) {
        return {
          ...state,
          error: "You don't have enough money"
        };
      }

      return {
        ...state,
        amount: state.amount - action.payload
      };
    }
    case RESET: {
      return {
        ...state,
        amount: initialState.amount,
        error: "",
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
