export default function LineComponent() {
  return (
    <div className="relative w-[1.5px] bg-gray-400 my-4">
      <div className="absolute w-3 h-3 border-2 border-yellow-500 rounded-full left-1/2 transform -translate-x-1/2 top-[-11px]"></div>
      <div className="absolute w-3 h-3 border-2 border-yellow-500 rounded-full left-1/2 transform -translate-x-1/2 bottom-[-11px]"></div>
    </div>
  );
}
