export default function Input(enter, changed) {
  return (
    <input
      className="w-full md:w-11/12 border-2 border-gray-200 rounded-lg px-4 py-2"
      type="text"
      placeholder="Search Location"
      onKeyPress={enter}
      onChange={changed}
      autoFocus
    />
  );
}
