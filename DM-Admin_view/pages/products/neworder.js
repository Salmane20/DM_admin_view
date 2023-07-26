import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

export default function NewProduct(){

    const [order_code,setcode] = useState('');
    const [ord_quantity,setquantity] = useState('');
    const [ord_total_price,settotalp] = useState('');
    const [client_id,setcid] = useState('');
    const [admin_id,setaid] = useState('');
    const [product_id,setpid] = useState('');
    const [transaction_code,settcode] = useState('');
    const [goToOrders,setGoToOrders] = useState('');

    async function createOrder() {
        const data = {order_code,ord_quantity,ord_total_price,client_id,admin_id,product_id,transaction_code};
        await axios.post('http://localhost:5000/order', data);
        setGoToOrders(True);
    }
    if(goToOrders){
        return redirect('/orders');
    }
    return (
        <Layout>
            <form onSubmit={createOrder}>
            <h1>New Order</h1>
            <label>Order Code</label>
            <input type="text" placeholder="Order Code" value={order_code} onChange={ev => setcode(ev.target.value)}/>
            <label>Order Quantity</label>
            <input type="text" placeholder="Order Quantity" value={ord_quantity} onChange={ev => setquantity(ev.target.value)}/>
            <label>Total Price (In DH)</label>
            <input type="text" placeholder="Total Price" value={ord_total_price} onChange={ev => settotalp(ev.target.value)}/>
            <label>Client Id</label>
            <input type="text" placeholder="Client Id" value={client_id} onChange={ev => setcid(ev.target.value)}/>
            <label>Admin Id</label>
            <input type="text" placeholder="Admin Id" value={admin_id} onChange={ev => setaid(ev.target.value)}/>
            <label>Product</label>
            <input type="text" placeholder="Product Id" value={product_id} onChange={ev => setpid(ev.target.value)}/>
            <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    );
}