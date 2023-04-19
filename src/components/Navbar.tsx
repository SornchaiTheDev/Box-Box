import Image from "next/image";

function Navbar() {
  return (
    <div className="my-4">
      <Image src="/logo.svg" alt="BoxBox Logo" width={80} height={80} />
      <div className="bg-slate-200 rounded-lg w-full h-2 mt-2"></div>
    </div>
  );
}

export default Navbar;
