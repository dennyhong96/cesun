import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getProducts } from "../../actions/product";

const Products = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <p>{JSON.stringify(products)}</p>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { getProducts })(Products);
