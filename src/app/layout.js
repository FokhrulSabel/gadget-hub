import "./globals.css";
export const metadata = {
  title: "GadgetHub – Modern Tech Store",
  description: "GadgetHub — modern tech store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="text-xl font-bold">GadgetHub</div>
              <nav>
                <ul className="hidden md:flex gap-6">
                  <li>Home</li>
                  <li>Products</li>
                  <li>Dashboard</li>
                  <li>About</li>
                </ul>
                <div className="md:hidden">☰</div>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
            <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 dark:text-slate-300">
              © {new Date().getFullYear()} GadgetHub. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
