import Identity from "./Identity";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full flex justify-between items-center p-2 py-4  ">
      <Identity />
      <Navbar />
    </header>
  );
}

export default Header;
