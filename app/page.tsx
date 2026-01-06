import PostList from "./components/postList";

type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">آخرین پست‌ها</h1>
      <PostList  />
    </main>
  );
}
