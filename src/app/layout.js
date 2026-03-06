import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "GadgetHub – Modern Tech Store",
  description: "GadgetHub — modern tech store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SessionProviderWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>

            <main className="flex-1">{children}</main>

            <Footer/>
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
