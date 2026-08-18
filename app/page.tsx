"use client";

import { useState, useEffect } from "react";
import LossChart from "./LossChart";

export default function Home() {
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(1.0);
  const [history, setHistory] = useState<{ epoch: number; loss: number }[]>([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setEpoch((prevEpoch) => {
        const newEpoch = prevEpoch + 1;

        setLoss((prevLoss) => {
          const newLoss = parseFloat((prevLoss * 0.85).toFixed(4));
          setHistory((prevHistory) => [...prevHistory, { epoch: newEpoch, loss: newLoss }]);

          if (newLoss < 0.05) {
            setRunning(false);
          }

          return newLoss;
        });

        return newEpoch;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-8">
      <h1 className="text-4xl font-bold text-white">Training Monitor</h1>

      <div className="flex gap-12">
        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 text-sm uppercase tracking-widest">Epoch</p>
          <p className="text-5xl font-bold text-white">{epoch}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 text-sm uppercase tracking-widest">Loss</p>
          <p className="text-5xl font-bold text-green-400">{loss}</p>
        </div>
      </div>

      <button
        onClick={() => setRunning(!running)}
        className={`px-6 py-3 rounded-lg text-white ${
          running ? "bg-red-600 hover:bg-red-500" : "bg-blue-600 hover:bg-blue-500"
        }`}
      >
        {running ? "Pause Training" : "Start Training"}
      </button>

      <LossChart data={history} />
    </div>
  );
}
