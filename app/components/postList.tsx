"use client";
import { useEffect, useState } from "react";

// حتماً باید این خط اول باشد

type Post = {
  id: number;
  title: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json as Post[]));
  },[]);




  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="rounded-lg border p-4 hover:bg-zinc-50 cursor-pointer"
          onClick={() => alert(`پست انتخاب شده: ${post.title}`)}
        >
          {post.title.toUpperCase()}
        </li>
      ))}
    </ul>
  );
}
