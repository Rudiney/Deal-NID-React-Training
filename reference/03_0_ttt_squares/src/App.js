import Square from "./components/Square";

function App() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="border rounded-xl mt-20">
        <h1 className="text-xxl font-bold p-2">Jogo da Velha</h1>
        <div className="border rounded w-56 grid grid-cols-3">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}

export default App;
