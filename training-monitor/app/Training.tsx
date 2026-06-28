"use client";

import { useState } from "react";

export default function Training() {
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(1);
  const [history, setHistory] = useState([]);

  function nextEpoch() {
    const Adder = epoch + 1;
    const Losser = parseFloat((loss * 0.85).toFixed(4));
    setEpoch(Adder);
    setLoss(Losser);
    setHistory([...history, Losser]);
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-8">
      <h1 className="text-4xl font-bold text-white">Training</h1>
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2">
          <p className=" text-amber-100 text-sm uppercase tracking-widest">
            Epoch
          </p>
          <p className="text-5xl font-bold text-white">{epoch}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className=" text-blue-300 text-sm uppercase tracking-widest">
            Loss
          </p>
          <p className="text-5xl font-bold text-white">{loss}</p>
        </div>
      </div>
      <button
        onClick={nextEpoch}
        className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
      >
        Next Epoch
      </button>
      <div className="flex flex-col items-center gap-2">
        <p className="text-zinc-400 text-sm uppercase tracking-widest">
          Loss History
        </p>
        <div className="flex gap-2">
          {history.map((val, idx) => (
            <span key={idx} className="text-green-400 text-sm">
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
