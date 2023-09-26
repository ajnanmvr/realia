import Image from "next/image";
function Header() {
  return (
    <header className="flex justify-between items-start m-16 mb-0 font-['Nexa'] h-screen">
      <div>
        <h1 className="text-5xl font-black text-theme">Realia'23</h1>
        <h2 className="text-xl leading-3">DHIU UG Arts Fest</h2>
      </div>

      <div className="flex items-center gap-3 texl-lg font-light">
        <nav>
          <ul className="flex">
            <li className="bg-theme text-white px-4 py-1 rounded-3xl hover:text-theme hover:bg-yellow-200 ">
              Home
            </li>
            <li className="text-theme px-4 py-1 rounded-3xl hover:bg-theme hover:text-yellow-200 ">
              Home
            </li>
            <li className="text-theme  px-4 py-1 rounded-3xl hover:bg-theme hover:text-yellow-200 ">
              Home
            </li>
            <li className="text-theme  px-4 py-1 rounded-3xl hover:bg-theme hover:text-yellow-200 ">
              Home
            </li>
            <li className="text-theme px-4 py-1 rounded-3xl hover:bg-theme hover:text-yellow-200 ">
              Home
            </li>
          </ul>
        </nav>
        <Image
          src="/logo.png" // Path to the image in the public folder
          alt="Realia Logo"
          width={150} // Set the width of the image
          height={0 } // Set the height of the image
        />
      </div>
    </header>
  );
}

export default Header;
