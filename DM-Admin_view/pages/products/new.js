import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

export default function NewProduct(){

    const [product_id,setid] = useState('');
    const [pro_name,setTitle] = useState('');
    const [pro_description,setDescription] = useState('');
    const [pro_price,setPrice] = useState('');
    const [pro_quantity,setQuantity] = useState('');
    const [pro_size,setSize] = useState('');
    const [pro_category,setCategory] = useState('');
    const [pro_color,setColor] = useState('');
    const [supplier_id,setsupplier] = useState('');
    const [goToProducts,setGoToProducts] = useState('');

    async function createProduct() {
        const data = { product_id , pro_name , pro_description, pro_price, pro_quantity, pro_size, pro_category,pro_color, supplier_id};
        await axios.post('http://localhost:5000/product', data);
        setGoToProducts(True);
    }
    if(goToProducts){
        return redirect('/products');
    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
            <h1>New Product</h1>
            <label>Product ID</label>
            <input type="text" placeholder="product ID" value={product_id} onChange={ev => setid(ev.target.value)}/>
            <label>Product Name</label>
            <input type="text" placeholder="product name" value={pro_name} onChange={ev => setTitle(ev.target.value)}/>
            <label>Description</label>
            <textarea placeholder="description" value={pro_description} onChange={ev => setDescription(ev.target.value)}/>
            <label>Price (In DH)</label>
            <input type="text" placeholder="price" value={pro_price} onChange={ev => setPrice(ev.target.value)}/>
            <label>Quantity</label>
            <input type="text" placeholder="quantity" value={pro_quantity} onChange={ev => setQuantity(ev.target.value)}/>
            <label>Size</label>
            <input type="text" placeholder="Size" value={pro_size} onChange={ev => setSize(ev.target.value)}/>
            <label>Category</label>
            <input type="text" placeholder="category" value={pro_category} onChange={ev => setCategory(ev.target.value)}/>
            <label>Color</label>
            <input type="text" placeholder="color" value={pro_color} onChange={ev => setColor(ev.target.value)}/>
            <label>Supplier ID</label>
            <input type="text" placeholder="Supplier Id" value={supplier_id} onChange={ev => setsupplier(ev.target.value)}/>
            <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    );
}