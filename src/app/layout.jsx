import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home",
  description: "Made by Aaron",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
