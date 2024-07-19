import Footer from "@/components/Footer";
import Transition from "@/components/Transition";
import IconLink from "@/components/IconLink";
import Comments from "@/components/Comments";
import SVGBanner from "@/components/SVGBanner";
import PostRecommender from "@/components/PostRecommender";

import "./PostLayout.scss";


export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ position: "relative" }}>
      <SVGBanner />
      <Transition>
        <div className="buttons">
          <IconLink href="/" text="Home" />
        </div>
        <div className="content">
          {children}
          <Comments />
          <PostRecommender />
        </div>
      </Transition>
      <Footer />
    </main>
  );
}
