import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect } from "react";

import ListProducts from "./components/ListProducts";

export default function products(){
    return(
     <Layout>
       <Link className="bg-indigo-950 text-white rounded-lg py-2 px-2" href={'/products/new'}>
            Add new Product
       </Link>
      <ListProducts/>
     </Layout>
    );
}