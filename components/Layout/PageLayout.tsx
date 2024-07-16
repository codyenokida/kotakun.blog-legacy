import Header from "@/components/Header";

import "./PostLayout.scss";
import Footer from "../Footer";
import Transition from "../Transition";
import IconLink from "../IconLink";
import Comments from "../Comments";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ position: "relative" }}>
      <Transition>
        <div style={{ height: "var(--space-12)", width: "100%" }} />
        <div className="buttons">
          <IconLink href="/" text="Home" />
        </div>
        <div className="content">{children}</div>
      </Transition>
      <Footer />
    </main>
  );
}
