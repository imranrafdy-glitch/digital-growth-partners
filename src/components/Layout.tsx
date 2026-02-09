import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ThemeGate from "./ThemeGate";

export default function Layout() {
  return (
    <ThemeGate>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeGate>
  );
}
