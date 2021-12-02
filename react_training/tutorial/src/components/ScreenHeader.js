export default function ScreenHeader({ children }) {
  return (
    <header className="bg-white shadow">
      <h1 className="text-3xl font-bold text-gray-900 py-6 px-8">{children}</h1>
    </header>
  );
}
