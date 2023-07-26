import react, { Fragment, useEffect, useState } from "react";

import EditOrders from "./EditOrders";

const ListOrders = () => {

    const [orders, setorders] = useState([]);


    const deleteOrder = async order_code=> {
        try{
            const deleteorder = await fetch(`http://localhost:5000/orders/delete/${order_code}`, {
                method: "DELETE"
            });

            setProducts(orders.filter(order => order.order_code !== order_code ))
        }catch (err){
            console.error(err.message)
        }
    }


    const getOrders = async() => {
        try{
            
            const response = await fetch("http://localhost:5000/orders"); 
            const jsonData = await response.json();

            setorders(jsonData);
        } catch(err){
            console.error(err.message);
        }
    }


    useEffect(() =>{
        getOrders();
    }, []);

    return (
        <Fragment>
  <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Order code</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Client ID</th>
        <th>Admin ID</th>
        <th>Product ID</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.order_code}>
            <td>{order.order_code}</td>
            <td>{order.ord_quantity}</td>
            <td>{order.ord_total_price}</td>
            <td>{order.client_id}</td>
            <td>{order.admin_id}</td>
            <td>{order.product_id}</td>
            <td> 
            <EditOrders order={order} getOrders={getOrders}/> 
            </td>
            <td><button className="btn btn-danger" onClick={() => deleteOrder(order.order_code)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
};

export default ListOrders;