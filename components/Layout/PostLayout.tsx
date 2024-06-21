import Header from "@/components/Header";

import "./PostLayout.scss";
import Footer from "../Footer";
import Transition from "../Transition";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <Transition>
        <div className="content">{children}</div>
      </Transition>
      <Footer />
    </main>
  );
}
