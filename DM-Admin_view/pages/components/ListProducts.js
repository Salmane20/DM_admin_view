import react, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import EditProducts from "./EditProducts";

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    const deleteProduct = async (product_id) => {
        try{
            const deleteproduct = await fetch(`http://localhost:5000/Products/delete/${product_id}`, {
                method: "DELETE"
            });

            setProducts(products.filter(product => product.product_id !== product_id ))
        }catch (err){
            console.error(err.message)
        }
    }


    const getProducts = async() => {
        try{
            
            const response = await fetch("http://localhost:5000/products"); 
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
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Size</th>
        <th>Catgory</th>
        <th>Color</th>
        <th>Supplier</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.product_id}>
            <td>{product.product_id}</td>
            <td>{product.pro_name}</td>
            <td>{product.pro_description}</td>
            <td>{product.pro_price}</td>
            <td>{product.pro_quantity}</td>
            <td>{product.pro_size}</td>
            <td>{product.pro_category}</td>
            <td>{product.pro_color}</td>
            <td>{product.supplier_id}</td>
            <td> 
            <EditProducts product={product} getProducts={getProducts}/>
            </td>
            <td><button className="btn btn-danger" onClick={() => deleteProduct(product.product_id)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
};

export default ListProducts;
