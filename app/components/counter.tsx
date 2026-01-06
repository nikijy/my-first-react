"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);
  const [test, setTest] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setTest(5);
    }, 2000);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className="text-lg font-semibold">{count}</span>
      {test}
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
