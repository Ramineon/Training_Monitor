// 1:

// export default function Training() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-black">
//       <h1 className="text-4xl font-bold text-white">
//         Toro Bedin Lazizi Ke Miparasti
//       </h1>
//     </div>
//   );
// }

// _______________________________________________________________

// 2:

// "use client";

// import { useState } from "react";

// export default function Training() {
//   const [count, setCount] = useState(0);

//   function Nexteon() {
//     const nextCount = count + 1;
//     setCount(nextCount);
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-black gap-6 flex-col">
//       <h1 className="text-4xl font-bold text-white">
//         Toro Bedin Lazizi Ke Miparasti
//       </h1>
//       <p className="text-zinc-400 text-xl"> Bede behem : {count} </p>
//       <button
//         onClick={Nexteon}
//         className="bg-blue-800 text-white px-6 py-3 rounded"
//       >
//         Click
//       </button>
//     </div>
//   );
// }

// -------------------------------------------------------

"use client";

import { useState } from "react";

export default function Training() {
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(1);
  const [history, setHistory] = useState<number[]>([]);

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

// ----test

// "use client";

// import { useState } from "react";

// export default function Training() {
//   const [score, setScore] = useState(1);
//   const [level, setLevel] = useState(0);

//   function elite() {
//     const F1 = level + 1;
//     const F2 = parseFloat((score * 0.8).toFixed(4));

//     setLevel(F1);
//     setScore(F2);
//   }
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-800 gap-8">
//       <h1 className="text-blue-300 text-4xl font-bold"> Ramin Testing </h1>

//       <div className="flex gap-12 ">
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-amber-400 text-sm uppercase tracking-widest font-bold">
//             LVL randomeshkiyan
//           </p>
//           <p className="text-shadow-cyan-500 text-3xl "> {level} </p>
//         </div>
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-green-400 font-bold text-sm uppercase tracking-widest">
//             Score AmYal
//           </p>
//           <p className="text-shadow-cyan-500 text-3xl "> {score} </p>
//         </div>
//       </div>
//       <button
//         onClick={elite}
//         className="px-6 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-pink-900 "
//       >
//         Randomamyal
//       </button>
//     </div>
//   );
// }

// ------test end

// 7:
// "use client";

// import { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function Home() {
//   const [epoch, setEpoch] = useState(0);
//   const [loss, setLoss] = useState(1.0);
//   const [history, setHistory] = useState<{ epoch: number; loss: number }[]>([]);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       setEpoch((prevEpoch) => {
//         const newEpoch = prevEpoch + 1;

//         setLoss((prevLoss) => {
//           const newLoss = parseFloat((prevLoss * 0.85).toFixed(4));
//           setHistory((prevHistory) => [
//             ...prevHistory,
//             { epoch: newEpoch, loss: newLoss },
//           ]);
//           return newLoss;
//         });

//         return newEpoch;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [running]);

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-8">
//       <h1 className="text-4xl font-bold text-white">Training Monitor</h1>

//       <div className="flex gap-12">
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-zinc-400 text-sm uppercase tracking-widest">
//             Epoch
//           </p>
//           <p className="text-5xl font-bold text-white">{epoch}</p>
//         </div>
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-zinc-400 text-sm uppercase tracking-widest">
//             Loss
//           </p>
//           <p className="text-5xl font-bold text-green-400">{loss}</p>
//         </div>
//       </div>

//       <button
//         onClick={() => setRunning(!running)}
//         className={`px-6 py-3 rounded-lg text-white ${
//           running
//             ? "bg-red-600 hover:bg-red-500"
//             : "bg-blue-600 hover:bg-blue-500"
//         }`}
//       >
//         {running ? "Pause Training" : "Start Training"}
//       </button>

//       <div className="w-full max-w-xl h-64">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={history}>
//             <CartesianGrid stroke="#333" />
//             <XAxis dataKey="epoch" stroke="#888" />
//             <YAxis stroke="#888" />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="loss"
//               stroke="#4ade80"
//               strokeWidth={2}
//               dot={false}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
