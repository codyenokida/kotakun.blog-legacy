import Header from "@/components/Header";

import "./PostLayout.scss";
import Footer from "../Footer";
import Transition from "../Transition";
import IconLink from "../IconLink";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header marginHeight="--space-13"/>
      <Transition>
        <div className="buttons">
          <IconLink href="/" text="Home" />
        </div>
        <div className="content">{children}</div>
      </Transition>
      <Footer />
    </main>
  );
}
