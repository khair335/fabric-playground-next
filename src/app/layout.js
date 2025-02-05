import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
// import StoreProvider from './StoreProvider';


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body

      >
        <div className='min-h-[calc(100vh-150px)]'>
          {/* <StoreProvider> */}
        <Navbar />
            {children}
          {/* </StoreProvider> */}
          </div>
        <Footer />
      </body>
    </html>
  );
}
