import React from "react";
import { Spotlight } from "../../../components/motion-primitives/spotlight";

export default function Test() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-64 h-64 bg-zinc-800 rounded-xl">
        <Spotlight
          className="from-cyan-500 via-blue-500 to-blue-600"
          size={200}
        />
        <p className="relative z-10 text-white p-4">Hover me!</p>
      </div>
    </div>
  );
}
