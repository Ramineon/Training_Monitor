"use client";

import { useState } from "react";

export default function Home() {
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(1.0);

  function nextEpoch() {
    setEpoch(epoch + 1);
    setLoss(parseFloat((loss * 0.85).toFixed(4)));
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-8">
      <h1 className="text-4xl font-bold text-white">Training Monitor</h1>

      <div className="flex gap-12">
        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 text-sm uppercase tracking-widest">
            Epoch
          </p>
          <p className="text-5xl font-bold text-white">{epoch}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 text-sm uppercase tracking-widest">
            Loss
          </p>
          <p className="text-5xl font-bold text-green-400">{loss}</p>
        </div>
      </div>

      <button
        onClick={nextEpoch}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Next Epoch
      </button>
    </div>
  );
}
