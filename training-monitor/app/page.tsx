"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function elveon() {
    setCount(count + 1);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-6">
      <h1 className="text-4xl font-bold text-white">Training Monitor</h1>
      <p className="text-zinc-400 text-xl">Epoch: {count}</p>
      <button
        onClick={elveon}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Next Epoch
      </button>
    </div>
  );
}
