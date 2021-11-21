import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState();
  return (
    <button className="border text-center h-8 hover:bg-gray-200" onClick={() => setValue("X")}>
      {value}
    </button>
  );
}
