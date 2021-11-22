export default function Todo() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-grey-darkest">Todo List</h1>
            <span>1/2 Tasks done</span>
          </div>

          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-black hover:border-black">
              Add
            </button>
          </div>
        </div>
        <div>
          <div className="flex mb-4 items-center">
            <input type="checkbox" checked={false} className="mx-2 cursor-pointer" />
            <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
              Remove
            </button>
          </div>
          <div className="flex mb-4 items-center">
            <input type="checkbox" checked={true} className="mx-2 cursor-pointer" />
            <p className="w-full line-through text-green">
              Submit Todo App Component to Tailwind Components
            </p>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
