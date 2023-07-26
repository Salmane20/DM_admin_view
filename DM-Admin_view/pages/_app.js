import '@/styles/globals.css';
import { ClerkProvider, SignIn, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Container } from "@mui/material";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Head>
        <title>Design Mall</title>
        <style>
          {`
            body {
              background-image: url('/images/ui.png');
              background-repeat: no-repeat;
              background-size: cover;
            }

            .centered {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
          `}
        </style>
      </Head>
      
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <Container className="centered">
        <SignedOut>
          <div className="text-indigo-950 centered">
            <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>Design Mall</h1>            
          </div>
          <div className="centered">
            <SignIn />
          </div>
        </SignedOut>
      </Container>
    </ClerkProvider>
  );
}
