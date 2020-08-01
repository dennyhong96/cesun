import { combineReducers } from "redux";

import products from "./product";
import auth from "./auth";

export default combineReducers({ products, auth });
