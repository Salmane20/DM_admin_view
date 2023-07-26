import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage(  ){

    const router = useRouter();
    const { product_id } = router.query;

    const [product, setProduct] = useState({});
    const [pro_name, setProName] = useState("");
    const [pro_description, editDescription] = useState("");
    const [pro_price, editPrice] = useState("");
    const [pro_quantity, editQuantity] = useState("");
    const [pro_size, editSize] = useState("");
    const [pro_category, editCategory] = useState("");
    const [pro_color, editColor] = useState("");
    const [supplier_id, editsupplier] = useState("");

    const getProducts = async() => {
        try{
            
            const response = await fetch("http://localhost:5000/products"); 
            const jsonData = await response.json();

            setProducts(jsonData);
        } catch(err){
            console.error(err.message);
        }
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
          await fetch(`http://localhost:5000/Product/${product_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pro_name, pro_description , pro_price , pro_quantity , pro_size , pro_category , pro_color , supplier_id}),
          });
          router.push("/products");
        } catch (err) {
          console.error(err.message);
        }
    };

    useEffect(() => {
        if (product_id) {
          getProducts();
        }
    }, [product_id]);
    


    return (
        <Layout>
           <form onSubmit={updateProduct}>
        <h1>Edit Product</h1>
        <label>Edit Product Name</label>
        <input type="text" placeholder="Product Name" value={pro_name} onChange={(e) => setProName(e.target.value)}/>
        <label>Edit Description</label>
        <textarea placeholder="description" value={pro_description} onChange={ev => editDescription(ev.target.value)}/>
        <label>Edit Price (In DH)</label>
        <input type="text" placeholder="price" value={pro_price} onChange={ev => editPrice(ev.target.value)}/>
        <label>Edit Quantity</label>
        <input type="text" placeholder="quantity" value={pro_quantity} onChange={ev => editQuantity(ev.target.value)}/>
        <label>Edit Size</label>
        <input type="text" placeholder="Size" value={pro_size} onChange={ev => editSize(ev.target.value)}/>
        <label>Edit Category</label>
        <input type="text" placeholder="category" value={pro_category} onChange={ev => editCategory(ev.target.value)}/>
        <label>Edit Color</label>
        <input type="text" placeholder="color" value={pro_color} onChange={ev => editColor(ev.target.value)}/>
        <label>Edit Supplier ID</label>
        <input type="text" placeholder="Supplier Id" value={supplier_id} onChange={ev => editsupplier(ev.target.value)}/>
        <button type="submit" className="btn btn-warning">
          Edit
        </button>
      </form>
        </Layout>
    );

}