// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [epoch, setEpoch] = useState(0);
//   const [loss, setLoss] = useState(1.0);
//   const [history, setHistory] = useState<any[]>([]);

//   function nextEpoch() {
//     const newLoss = parseFloat((loss * 0.85).toFixed(4));
//     setEpoch(epoch + 1);
//     setLoss(newLoss);
//     setHistory([...history, newLoss]);
//   }

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-8">
//       <h1 className="text-4xl font-bold text-white">Training Monitor</h1>

//       <div className="flex gap-12">
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-zinc-400 text-sm uppercase tracking-widest">
//             Epoch
//           </p>
//           <p className="text-5xl font-bold text-white">{epoch}</p>
//           <p className="text-3xl font-bold text-red-600">9A4172</p>
//         </div>
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-zinc-400 text-sm uppercase tracking-widest">
//             Loss
//           </p>
//           <p className="text-5xl font-bold text-green-400">{loss}</p>
//           <p className="text-3xl font-bold text-amber-200">3BM15</p>
//         </div>
//       </div>

//       <button
//         onClick={nextEpoch}
//         className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
//       >
//         Next Epoch
//       </button>

//       <div className="flex flex-col items-center gap-2">
//         <p className="text-zinc-400 text-sm uppercase tracking-widest">
//           Loss History
//         </p>
//         <div className="flex gap-2">
//           {history.map((val, idx) => (
//             <span key={idx} className="text-green-400 text-sm">
//               {val}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// ----------------------------------------------------------

// "use client";
// import { useState, useCallback } from "react";

// export default function TrainingDashboard() {
//   const [epoch, setEpoch] = useState(0);
//   const [loss, setLoss] = useState(1.0);
//   const [accuracy, setAccuracy] = useState(50);
//   const [history, setHistory] = useState<any[]>([]);
//   const [isTraining, setIsTraining] = useState(false);

//   const nextEpoch = useCallback(() => {
//     // ←←← You write the logic here
//     const newLoss = parseFloat((loss * 0.85).toFixed(4));
//     const rawAccuracy = 0.5 + 0.5 / (1 + Math.exp(7 * (newLoss - 0.7)));
//     const newAccuracy = parseFloat((rawAccuracy * 100).toFixed(2));

//     setEpoch(epoch + 1);
//     setLoss(newLoss);
//     setAccuracy(newAccuracy)
//     setHistory([...history, newLoss]);
//     setIsTraining(false);
//   }, [loss, accuracy]);

//   const trainMultiple = () => {
//     // ←←← You write auto training logic here
//   };

//   const reset = () => {
//     // ←←← You write reset logic here
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white gap-8 p-8">
//       <h1 className="text-4xl font-bold">Training Dashboard</h1>

//       {/* Current Stats */}
//       <div className="flex gap-12">
//         {/* Epoch, Loss, Accuracy cards here */}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4">
//         <button onClick={nextEpoch} disabled={isTraining}>Next Epoch</button>
//         <button onClick={trainMultiple} disabled={isTraining}>Train 10 Epochs</button>
//         <button onClick={reset}>Reset</button>
//       </div>

//       {/* History */}
//       <div>
//         <h2>History</h2>
//         {/* Map over history and show each entry */}
//       </div>
//     </div>
//   );
// }

// _________________________________________________________________________

"use client";
import { useState, useCallback } from "react";

export default function TrainingDashboard() {
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(1.0);
  const [accuracy, setAccuracy] = useState(50);
  const [history, setHistory] = useState<any[]>([]);
  const [isTraining, setIsTraining] = useState(false);

  const nextEpoch = useCallback(() => {
    const newLoss = parseFloat((loss * 0.85).toFixed(4));

    // Better accuracy formula (increases as loss decreases)
    const rawAccuracy = 50 + 50 * (1 - Math.exp(-3 * (1 - newLoss)));
    const newAccuracy = parseFloat(rawAccuracy.toFixed(2));

    // Functional updates - safer!
    setEpoch((prev) => prev + 1);
    setLoss(newLoss);
    setAccuracy(newAccuracy);

    // Save full record in history
    setHistory((prev) => [
      ...prev,
      {
        epoch: epoch + 1,
        loss: newLoss,
        accuracy: newAccuracy,
      },
    ]);
  }, [loss]); // Only depend on loss

  const trainMultiple = useCallback(() => {
    setIsTraining(true);
    let count = 0;

    const interval = setInterval(() => {
      nextEpoch();
      count++;

      if (count >= 10) {
        clearInterval(interval);
        setIsTraining(false);
      }
    }, 400); // 400ms per epoch
  }, [nextEpoch]);

  const reset = () => {
    setEpoch(0);
    setLoss(1.0);
    setAccuracy(50);
    setHistory([]);
    setIsTraining(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white gap-8 p-8">
      <h1 className="text-5xl font-bold mb-8">Training Dashboard</h1>

      {/* Current Stats */}
      <div className="flex gap-16">
        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 uppercase tracking-widest text-sm">
            Epoch
          </p>
          <p className="text-6xl font-bold text-white">{epoch}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 uppercase tracking-widest text-sm">
            Loss
          </p>
          <p className="text-6xl font-bold text-green-400">{loss}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 uppercase tracking-widest text-sm">
            Accuracy
          </p>
          <p className="text-6xl font-bold text-cyan-400">{accuracy}%</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={nextEpoch}
          disabled={isTraining}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg disabled:opacity-50"
        >
          Next Epoch
        </button>

        <button
          onClick={trainMultiple}
          disabled={isTraining}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg disabled:opacity-50"
        >
          Train 10 Epochs
        </button>

        <button
          onClick={reset}
          className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg"
        >
          Reset
        </button>
      </div>

      {/* History */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl mb-4 text-center">Training History</h2>
        <div className="bg-zinc-900 p-6 rounded-xl max-h-96 overflow-auto">
          {history.length === 0 ? (
            <p className="text-zinc-500 text-center">No epochs yet...</p>
          ) : (
            history.map((entry, idx) => (
              <div
                key={idx}
                className="flex justify-between py-2 border-b border-zinc-800 last:border-0"
              >
                <span>Epoch {entry.epoch}</span>
                <span>
                  Loss: <span className="text-green-400">{entry.loss}</span>
                </span>
                <span>
                  Acc: <span className="text-cyan-400">{entry.accuracy}%</span>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
