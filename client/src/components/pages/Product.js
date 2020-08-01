import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getProduct } from "../../actions/product";

const Product = ({ match, getProduct, products }) => {
  useEffect(() => {
    const slug = match.params.slug;
    getProduct(slug);
  }, [match, getProduct]);

  return (
    <div>
      <h1>Product</h1>
      <p>{JSON.stringify(products.selectedProduct)}</p>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { getProduct })(Product);
