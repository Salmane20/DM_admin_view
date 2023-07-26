import react, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import EditProducts from "./components/EditProducts";

const ListView = () => {

    const [products, setProducts] = useState([]);


    const getProducts = async() => {
        try{
            
            const response = await fetch("http://localhost:5000/view"); 
            const jsonData = await response.json();

            setProducts(jsonData);
        } catch(err){
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getProducts();
    }, []);

    return (
        <Fragment>
    <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Order Code</th>
        <th>Product Name</th>
        <th>Product Description</th>
        <th>Client Name</th>
        <th>Client Email</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.product_id}>
            <td>{product.order_code}</td>
            <td>{product.pro_name}</td>
            <td>{product.pro_description}</td>
            <td>{product.client_name}</td>
            <td>{product.client_email}</td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
};

export default ListView;
