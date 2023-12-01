import navLinks from "@/assets/content/navlinks";
import { NavLink } from "@/types";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-flex flex-grow">
      <ul className="w-full flex justify-end space-x-6">
        {navLinks.map((navlink: NavLink) => (
          <li key={navlink.name}>
            <Link href={navlink.path}>{navlink.name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
