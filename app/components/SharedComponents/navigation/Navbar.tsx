"use client"
import navLinks from "@/assets/content/navlinks";
import { NavLink } from "@/types";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname()
  return (
    <nav className="w-flex  p-2 ">
      <ul className="hidden w-full lg:flex justify-end space-x-2">
        {navLinks.map((navlink: NavLink) => (
          <li className={
            path === navlink.path ? "bg-yellow-300 text-gray-600 p-2 px-4 rounded animation duration-100 ease-in"
            : "hover:text-yellow-300 bg-white p-2 px-4 rounded animation duration-100 ease-in"
          } key={navlink.name}>
            <Link href={navlink.path}>{navlink.name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
