import PageLayout from "@/components/Layout/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
