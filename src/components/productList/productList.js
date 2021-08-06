import React from "react";
import ProductItem from "../productItem";


const ProductList = ({mainTitle, data}) => {

    return (
        <div className="product-list p-grid p-justify-around p-mx-4 p-mt-2">
            <h4>{mainTitle}</h4>
            <ProductItem data={data}/>
        </div>
    )
}

export default ProductList;