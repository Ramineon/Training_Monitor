// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-black">
//       <h1 className="text-4xl font-bold text-white">Training Monitor</h1>
//     </div>
//   );
// }

// function Page() {
//   return <h1>Hello</h1>;
// }

// export default function Page() {
//   return <h1>Hello</h1>;
// }

// function Page() {
//   return <h1>3bm32</h1>;
// }
// export default Page;

//------------------------------------------------------------------------
// inside claude

// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [count, setCount] = useState(2);

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-6">
//       <h1 className="text-4xl font-bold text-white">Training Monitor</h1>
//       <p className="text-zinc-400 text-xl"> Qandbeh: {count}</p>
//       <button
//         onClick={() => setCount(count * 2)}
//         className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
//       >
//         Next Epoch
//       </button>
//     </div>
//   );
// }

//------------------------------------------------------------------------

// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [count, setCount] = useState(0);

//   console.log("Function executed");

//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }

//------------------------------------------------------------------------

// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [count, setCount] = useState(0);

//   console.log("Home rendered:", count);

//   return <button onClick={() => setCount(count + 1)}>Epoch: {count}</button>;
// }

// ------------------------------------------------------------------------------------

"use client";

import { useState } from "react";

export default function Home() {
  const [epoch, bm15] = useState(0);
  const [loss, bm32] = useState(1.0);

  function nextEpoch() {
    bm15(epoch + 1);
    bm32(parseFloat((loss * 0.85).toFixed(4)));
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
