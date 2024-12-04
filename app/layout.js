import localFont from 'next/font/local';
import "./globals.css";
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import ContextProvider from './Context';

export const metadata = {
  title: "IQC Services - Plan it, Make it, Deliver it",
  description: "We offer mechanical and sub-assembly production, specialized consulting services to help our customers to bring their products to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body style={{ fontFamily: 'Syne, sans-serif' }} className='lg:px-0 px-4'>
          <MainNav />
          {children}
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
