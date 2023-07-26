import Layout from "@/components/Layout";

import ListOrders from "./components/ListOrders";

import Link from "next/link";

export default function orders(){
    return(
        <Layout>
            <Link className="bg-indigo-950 text-white rounded-lg py-2 px-2" href={'/products/neworder'}>
                Add new Order
            </Link>
            <ListOrders />
        </Layout>
    );
}