import Header from "@/components/Header";

import "./PostLayout.scss";
import Footer from "../Footer";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </main>
  );
}
