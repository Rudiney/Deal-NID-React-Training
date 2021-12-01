function Square({ value, onClick, disabled }) {
  const handleClick = () => {
    if (!value) onClick();
  };

  return (
    <button
      className={`border text-center h-8 ${disabled ? "text-gray-400 " : ""} hover:bg-gray-200`}
      onClick={handleClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Square;
