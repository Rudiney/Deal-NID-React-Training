import cn from "classnames";
export default function Square({ value, index, onClick, disabled }) {
  return (
    <button
      className={cn("border text-center h-8 hover:bg-gray-200", { "text-gray-400": disabled })}
      onClick={() => !disabled && onClick(index)}
    >
      {value}
    </button>
  );
}
