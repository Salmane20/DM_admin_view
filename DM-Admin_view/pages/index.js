const count = 3;
import Layout from "@/components/Layout";
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Box, Typography, Container, Button, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";
import photo from './DesignMall.jpg';

export default function Home() {
  
  const [numClients, setNumClients] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/count");
        const jsonData = await response.json();
        setNumClients(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="text-indigo-950 flex justify-between">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
              <Typography variant="h6" gutterBottom>
                Number of Clients
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                }}
              >
                <Typography variant="h4">{count}</Typography>
              </Box>
            </Paper>
            <Box sx={{ mt: 3 }}>
              <img src={photo} alt="Design Mall" style={{ width: "100%" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="./ListView" passHref>
              <Button variant="contained" color="primary" size="large" fullWidth>
                Client Order View
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="admin-info">
              <Typography variant="h4">Hello, Admin</Typography>
              <Typography variant="body1" sx={{ mt: 2, fontSize: "24px", marginBottom: "24px" }}>
                Welcome to Design Mall, a platform where creativity meets commerce. We bring together talented designers and discerning clients to create exceptional products and experiences. Explore the world of design, connect with clients, and manage orders seamlessly.
              </Typography>
            </div>
          </Grid>
        </Grid> 
        <UserButton />
      </div>
    </Layout>
  );
}
