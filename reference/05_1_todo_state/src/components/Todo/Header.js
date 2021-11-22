export default function TodoHeader({ title, doneCount, totalCount }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-grey-darkest">{title}</h1>
      <span>
        {doneCount}/{totalCount} Tasks done
      </span>
    </div>
  );
}
