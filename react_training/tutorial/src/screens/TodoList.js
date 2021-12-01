import ScreenHeader from "../components/ScreenHeader";

export default function TodoListScreen() {
  return (
    <>
      <ScreenHeader title="Todo List" />

      <form className="p-4">
        <div className="flex">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          />
          <button
            type="submit"
            className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-black hover:border-black"
          >
            ADD
          </button>
        </div>
      </form>

      <div className="flex mb-4 items-center mx-4">
        <input type="checkbox" className="mr-2 cursor-pointer" />
        <p className="w-full">TODODOLEOUSTOEU</p>
        <button className="flex-no-shrink px-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-red-500 hover:border-red-500">
          Remove
        </button>
      </div>

      <div className="flex mb-4 items-center mx-4">
        <input type="checkbox" className="mr-2 cursor-pointer" checked/>
        <p className="w-full text-green-500 line-through">TODODOLEOUSTOEU</p>
        <button className="flex-no-shrink px-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-red-500 hover:border-red-500">
          Remove
        </button>
      </div>
    </>
  );
}
