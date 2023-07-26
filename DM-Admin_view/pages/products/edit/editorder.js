import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditOrderPage(  ){

    const router = useRouter();
    const { order_code } = router.query;

    const [order, setorder] = useState({});
    const [ord_quantity, setquantity] = useState("");
    const [ord_total_price, edittotal] = useState("");
    const [client_id, editcid] = useState("");
    const [admin_id, editaid] = useState("");
    const [product_id, editpid] = useState("");

    const getOrders = async() => {
        try{
            
            const response = await fetch("http://localhost:5000/orders"); 
            const jsonData = await response.json();

            setProducts(jsonData);
        } catch(err){
            console.error(err.message);
        }
    }

    const updateOrder = async (e) => {
        e.preventDefault();
        try {
          await fetch(`http://localhost:5000/Order/${order_code}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ord_quantity , ord_total_price , client_id , admin_id , product_id}),
          });
          router.push("/orders");
        } catch (err) {
          console.error(err.message);
        }
    };

    useEffect(() => {
        if (order_code) {
          getOrders();
        }
    }, [order_code]);
    


    return (
        <Layout>
           <form onSubmit={updateOrder}>
        <h1>Edit Order</h1>
        <label>Edit Order Quantity</label>
        <input type="text" placeholder="Order Quantity" value={ord_quantity} onChange={(e) => setquantity(e.target.value)}/>
        <label>Edit Order Total Price</label>
        <input type="text" placeholder="Total Price" value={ord_total_price} onChange={ev => edittotal(ev.target.value)}/>
        <label>Edit Client Id</label>
        <input type="text" placeholder="Client ID" value={client_id} onChange={ev => editcid(ev.target.value)}/>
        <label>Edit Admin Id</label>
        <input type="text" placeholder="Admin Id" value={admin_id} onChange={ev => editaid(ev.target.value)}/>
        <label>Edit Product ID</label>
        <input type="text" placeholder="Product ID" value={product_id} onChange={ev => editpid(ev.target.value)}/>
        <button type="submit" className="btn btn-warning">
          Edit
        </button>
      </form>
        </Layout>
    );

}