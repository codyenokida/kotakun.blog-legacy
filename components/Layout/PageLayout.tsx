import Footer from "@/components/Footer";
import Transition from "@/components/Transition";
import IconLink from "@/components/IconLink";
import SVGBanner from "@/components/SVGBanner";

import "./PostLayout.scss";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ position: "relative" }}>
      <SVGBanner />
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
