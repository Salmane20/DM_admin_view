import React, { Fragment, useState} from "react";

import Link from "next/link";

import EditProductPage from "../products/edit/editproduct";

const EditOrders = ({ order, getOrders}) => {

    const updateOrder = async () => {
        try {
          await fetch(`http://localhost:5000/Order/${order.order_code}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ord_quantity, ord_total_price, client_id, admin_id, product_id }),
          });
    
          getProducts();
        } catch (err) {
          console.error(err.message);
        }
    };
    
    return (
        <Fragment>
            <button type="button" className="btn btn-warning" onClick={updateOrder}>
                <Link href={`/products/edit/editorder?order_code=${order.order_code}`}>
                    Edit
                </Link>
            </button>
        </Fragment>
    )


}

export default EditOrders;