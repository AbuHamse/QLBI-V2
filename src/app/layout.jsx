import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./component/Navbar";// Updated path for better convention
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Islamic Marriage Site",
  description: "Find your perfect match with our Islamic marriage platform",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A4958]/5`}>
      

        {/* Main Content */}
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          
          {children}
          
          </main>

        {/* Footer */}
        <footer className="bg-emerald-800 text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Islamic Marriage Site. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
