import Footer from "@/components/Footer";
import HeroSVG from "@/components/HeroSVG";

import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className={styles.main}>
      <HeroSVG />
      {children}
      <Footer />
    </main>
  );
}
