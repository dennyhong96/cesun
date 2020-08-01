import axios from "axios";

import { PRODUCTS_FETCHED } from "./actionTypes";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/products");
    dispatch({
      type: PRODUCTS_FETCHED,
      payload: res.data.data.products,
    });
  } catch (error) {
    console.error(error);
  }
};
