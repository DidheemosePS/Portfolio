export default function Navigation() {
  return (
    <div className="m-auto h-14 flex justify-between items-end bg-gradient-to-r from-[#37ff80bf] to-blue-400 px-5 sticky top-0 left-0 z-10 sm:px-10 md:px-14 lg:px-[4.5rem] xl:px-[5.5rem] 2xl:px-[6.5rem]">
      <p className="font-bold text-2xl">Didheemose.</p>
      <div className="hidden lg:flex gap-12 font-semibold">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
