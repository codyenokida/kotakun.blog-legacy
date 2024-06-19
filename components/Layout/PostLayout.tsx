import Header from "@/components/Header";

import "./PostLayout.scss";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <div className="content">{children}</div>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
