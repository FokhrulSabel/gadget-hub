import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
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

            <footer className="border-t bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
              <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 dark:text-slate-300">
                © {new Date().getFullYear()} GadgetHub. All rights reserved.
              </div>
            </footer>
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
