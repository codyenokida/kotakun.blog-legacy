import PostLayout from "@/components/Layout/PostLayout";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PostLayout>{children}</PostLayout>;
}
