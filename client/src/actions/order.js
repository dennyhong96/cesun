import axios from "axios";

import { ORDERS_FETCHED, ORDER_FETCHED, ORDER_ERROR } from "./actionTypes";

export const getOrders = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/orders");
    console.log(res.data);
    dispatch({
      type: ORDERS_FETCHED,
      payload: res.data.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getOrder = (orderId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/orders/${orderId}`);
    console.log(res.data);
    dispatch({
      type: ORDER_FETCHED,
      payload: res.data.data.order,
    });
  } catch (error) {
    console.error(error);
  }
};
