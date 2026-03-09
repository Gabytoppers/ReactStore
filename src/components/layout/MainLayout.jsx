
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children, cartCount }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar cartCount={cartCount} />

      <main className="flex-1 w-full px-6 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}