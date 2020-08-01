import { PRODUCTS_FETCHED } from "../actions/actionTypes";

const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_FETCHED:
      return { ...state, ...payload };
    default:
      return state;
  }
};
