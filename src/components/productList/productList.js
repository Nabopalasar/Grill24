import React from "react";

import ProductItem from "../productItem";


const ProductList = ({mainTitle, data}) => {

    return (
        <div className="product-list  p-mx-4 p-mt-2">
            <div><h4 align="center">{mainTitle}</h4></div>
            <ProductItem data={data}/>
        </div>
    )
}

export default ProductList;