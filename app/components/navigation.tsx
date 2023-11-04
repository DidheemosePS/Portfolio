export default function Navigation() {
  return (
    <div className="max-w-7xl h-14 m-auto flex justify-between items-end bg-gradient-to-r from-green-400 to-blue-400 px-5">
      <p className="font-bold text-2xl">Didheemose.</p>
      <div className="hidden lg:flex gap-12 font-semibold text-xl">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
