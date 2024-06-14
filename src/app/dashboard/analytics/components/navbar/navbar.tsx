import NavbarItems from "./items";
import NavbarMenuDropDown from "./menudropdown";
export default function Navbar() {
  return (
    <div className="lg:h-5/6 md:h-5/6 sm:h-5/6 xs:h-28 h-8 rounded-xl">
      <div className="hidden lg:flex md:flex sm:flex xs:hidden top-16 left-2 bg-main-color h-full rounded-xl">
        <NavbarItems />
      </div>
      <div className="lg:hidden md:hidden sm:hidden xs:flex">
        <NavbarMenuDropDown />
      </div>
    </div>
  );
}
