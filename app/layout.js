import localFont from 'next/font/local'
import "./globals.css";
import MainNav from './components/MainNav';
import Footer from './components/Footer';

const switzer = localFont({
  src: './fonts/Switzer-Variable.woff2',
  display: 'swap',
  variable: '--font-switzer'
})

export const metadata = {
  title: "IQC Services - Plan it, Make it, Deliver it",
  description: "We offer mechanical and sub-assembly production, specialized consulting services to help our customers to bring their products to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${switzer.variable}`}>
        <MainNav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
