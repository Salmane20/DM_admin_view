import Layout from "@/components/Layout";

import { UserProfile } from "@clerk/nextjs";

export default function Profile(){
    return(
        <Layout>
            <div>
            <UserProfile />
            </div>            
        </Layout>
    );
}