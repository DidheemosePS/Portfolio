export default function LineComponent() {
  return (
    <div className="w-[1.5px] h-[60%] bg-gray-400 absolute -left-5 top-[50%] transform -translate-y-1/2">
      <div className="absolute w-3 h-3 border-2 border-yellow-500 rounded-full left-1/2 transform -translate-x-1/2 top-[-11px]"></div>
      <div className="absolute w-3 h-3 border-2 border-yellow-500 rounded-full left-1/2 transform -translate-x-1/2 bottom-[-11px]"></div>
    </div>
  );
}
