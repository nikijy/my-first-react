import AddPost from "./components/addPost";
import PostList from "./components/postList";

type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const data = await res.json();
  const posts: Post[] = data.posts;
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">آخرین پست‌ها</h1>
      <PostList />

      <h1>پست های خودم </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="rounded border p-4">
            {post.title}
          </li>
        ))}
      </ul>

      <h1>ارسال دیتا</h1>
      <AddPost />
    </main>
  );
}
