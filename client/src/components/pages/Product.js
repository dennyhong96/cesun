import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getProduct } from "../../actions/product";

const Product = ({ match, getProduct }) => {
  useEffect(() => {
    const slug = match.params.slug;
    getProduct(slug);
  }, []);

  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

export default connect(null, { getProduct })(Product);
