"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(1.0);
  const [history, setHistory] = useState<{ epoch: number; loss: number }[]>([]);

  function nextEpoch() {
    const newLoss = parseFloat((loss * 0.85).toFixed(4));
    const newEpoch = epoch + 1;

    setEpoch(newEpoch);
    setLoss(newLoss);
    setHistory([...history, { epoch: newEpoch, loss: newLoss }]);
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

      <div className="w-full max-w-xl h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <CartesianGrid stroke="#333" />
            <XAxis dataKey="epoch" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="loss"
              stroke="#4ade80"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
