import React, { Fragment, useState} from "react";

import Link from "next/link";

import EditProductPage from "../products/edit/editproduct";

const EditProducts = ({ product, getProducts }) => {

    const updateProductName = async () => {
        try {
          await fetch(`http://localhost:5000/Product/${product.product_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pro_name }),
          });
    
          getProducts();
        } catch (err) {
          console.error(err.message);
        }
    };
    
    return (
        <Fragment>
            <button type="button" className="btn btn-warning" onClick={updateProductName}>
                <Link href={`/products/edit/editproduct?product_id=${product.product_id}`}>
                    Edit
                </Link>
            </button>
        </Fragment>
    )


}

export default EditProducts;