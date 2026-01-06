"use client";

import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");

  async function submitHandler() {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <div className="mt-8 space-y-4">
      <input
        className="w-full rounded border p-2"
        placeholder="عنوان پست"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={submitHandler}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        ارسال
      </button>
    </div>
  );
}
