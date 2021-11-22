import { useState } from "react";

export default function Square({ value, index, onClick }) {
  return (
    <button className="border text-center h-8 hover:bg-gray-200" onClick={() => onClick(index)}>
      {value}
    </button>
  );
}
